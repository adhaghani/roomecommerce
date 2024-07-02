<?php 
include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();



header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $Product = json_decode(file_get_contents("php://input"));

    // Check if username or email exists
    $sql = "SELECT * FROM useraccount WHERE UserID <> :UserID AND (Username = :Username OR emailAddress = :emailAddress)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':UserID', $Product->UserID);
    $stmt->bindParam(':Username', $Product->Username);
    $stmt->bindParam(':emailAddress', $Product->emailAddress);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if($result){
        $response = ['status' => 0, 'message' => 'Username or email already exists.'];
    } else {
        $sql = "UPDATE useraccount SET firstName = :firstName, lastName = :lastName, emailAddress = :emailAddress, phoneNumber = :phoneNumber, addressLine1 = :addressLine1, addressLine2 = :addressLine2, postCode = :postCode, city = :city, country = :country, Username = :Username WHERE UserID = :UserID";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':UserID', $Product->UserID);
        $stmt->bindParam(':firstName', $Product->firstName);
        $stmt->bindParam(':lastName', $Product->lastName);
        $stmt->bindParam(':emailAddress', $Product->emailAddress);
        $stmt->bindParam(':phoneNumber', $Product->phoneNumber);
        $stmt->bindParam(':addressLine1', $Product->addressLine1);
        $stmt->bindParam(':addressLine2', $Product->addressLine2);
        $stmt->bindParam(':postCode', $Product->postCode);
        $stmt->bindParam(':city', $Product->city);
        $stmt->bindParam(':country', $Product->country);
        $stmt->bindParam(':Username', $Product->Username);

        if($stmt->execute()){
            $response = ['status' => 1, 'message' => 'Record Updated successfully.'];
        }else{
            $response = ['status' => 0, 'message' => 'Failed to Update record.'];
        }
    }

    echo json_encode($response);
    exit();
}
?>