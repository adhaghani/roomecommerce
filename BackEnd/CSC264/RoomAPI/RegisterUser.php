<?php
include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();


header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $products = json_decode(file_get_contents("php://input"));

    // Check if username or email exists
    $sql = "SELECT * FROM useraccount WHERE Username = :Username OR emailAddress = :emailAddress";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':Username', $products->Username);
    $stmt->bindParam(':emailAddress', $products->emailAddress);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if($result){
        $response = ['status' => 0, 'message' => 'Account with the same username / email address already exists.'];
    } else {
        $sql = "INSERT INTO useraccount(Username, Password, RoleID, firstName, lastName, emailAddress,phoneNumber,addressLine1,addressLine2,postCode,city,country,dateRegistered)
                VALUES (:Username,:Password,:RoleID,:firstName,:lastName,:emailAddress,:phoneNumber,:addressLine1,:addressLine2,:postCode,:city,:country,:dateRegistered)";
        $stmt = $conn->prepare($sql);
        $register_at = date('Y-m-d');
        $stmt->bindParam(':Username', $products->Username);
        $hashedpassword = password_hash($products->Password, PASSWORD_DEFAULT);
        $stmt->bindParam(':Password', $hashedpassword);
        $stmt->bindParam(':RoleID', $products->RoleID);
        $stmt->bindParam(':firstName', $products->firstName);
        $stmt->bindParam(':lastName', $products->lastName);
        $stmt->bindParam(':emailAddress', $products->emailAddress);
        $stmt->bindParam(':phoneNumber', $products->phoneNumber);
        $stmt->bindParam(':addressLine1', $products->addressLine1);
        $stmt->bindParam(':addressLine2', $products->addressLine2);
        $stmt->bindParam(':postCode', $products->postCode);
        $stmt->bindParam(':city', $products->city);
        $stmt->bindParam(':country', $products->country);
        $stmt->bindParam(':dateRegistered', $register_at);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
    }

    echo json_encode($response);
    exit();
}
?>