<?php 
include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();



header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");


$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $order = json_decode(file_get_contents("php://input"));
    $sql = "UPDATE ordertable SET StatusID = :StatusID WHERE OrderID = :OrderID AND UserID = :UserID";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':OrderID', $order->OrderID);
    $stmt->bindParam(':UserID', $order->UserID);
    $stmt->bindParam(':StatusID', $order->StatusID);
    if($stmt->execute()){
        $response = ['status' => 1, 'message' => 'Record Updated successfully.'];
    }else{
         $response = ['status' => 0, 'message' => 'Failed to Update record.'];
    }
    echo json_encode($response);
    exit();
}

?>