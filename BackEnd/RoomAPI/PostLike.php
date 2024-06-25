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
    $sql = "INSERT INTO liked(UserID, ProductID) VALUES (:UserID, :ProductID)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':UserID', $products->UserID);
    $stmt->bindParam(':ProductID', $products->ProductID);
    if ($stmt->execute()) {
     $response = ['status' => 1, 'message' => 'Product Liked successfully.'];
    }
    else {
     $response = ['status' => 0, 'message' => 'Failed to like product.'];
    }

    echo json_encode($response);
    exit();
}

?>