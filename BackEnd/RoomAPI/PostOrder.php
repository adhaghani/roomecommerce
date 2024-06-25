<?php
include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();



header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");

$method = $_SERVER['REQUEST_METHOD'];

if($method === 'POST'){
$OrderData = json_decode(file_get_contents("php://input"));
$sql = "INSERT INTO ordertable (UserID, TotalPrice, PaymentMethod, StatusID) VALUES (:UserID, :TotalPrice, :PaymentMethod, :StatusID)";
    // Insert order data
    $orderStmt = $conn->prepare($sql);
    $orderStmt->bindParam(':UserID', $OrderData->UserID);
    $orderStmt->bindParam(':TotalPrice', $OrderData->TotalPrice);
    $orderStmt->bindParam(':PaymentMethod', $OrderData->PaymentMethod);
    $orderStmt->bindParam(':StatusID', $OrderData->StatusID);

    if($orderStmt->execute()){
        $responseOrder = ['Status' => 1, 'message' => "Order Added Successfully"];
        echo json_encode($responseOrder);
    }

exit();
}
?>