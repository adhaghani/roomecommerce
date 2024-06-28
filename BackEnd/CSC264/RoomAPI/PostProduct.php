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
    $sql = "INSERT INTO product(Name, Description, Price, ProductStock, DateAdded, CategoryID, PicturePath) VALUES (:Name, :Description, :Price, :ProductStock, :DateAdded, :CategoryID, :PicturePath)";
    $stmt = $conn->prepare($sql);
    $DateAdded = date('Y-m-d');
    $stmt->bindParam(':Name', $products->Name);
    $stmt->bindParam(':Description', $products->Description);
    $stmt->bindParam(':Price', $products->Price);
    $stmt->bindParam(':ProductStock', $products->ProductStock);
    $stmt->bindParam(':DateAdded', $DateAdded);
    $stmt->bindParam(':CategoryID', $products->CategoryID);
    $stmt->bindParam(':PicturePath', $products->PicturePath);

    if ($stmt->execute()) {
        $response = ['status' => 1, 'message' => 'Record created successfully.'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to create record.'];
    }

    echo json_encode($response);
    exit();
}
?>