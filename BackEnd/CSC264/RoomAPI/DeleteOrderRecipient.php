<?php 
include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();



header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");


$method = $_SERVER['REQUEST_METHOD'];


if ($method === 'DELETE') {
 
    $Recipientsql = "DELETE FROM orderrecipient WHERE OrderID = :OrderID";
    $OrderID = $_GET['OrderID'];
    $Recipientstmt = $conn->prepare($Recipientsql);
    $Recipientstmt->bindParam(':OrderID', $OrderID);
    $Recipientstmt->execute();

    if($Recipientstmt->execute()){
        $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
    }else{
         $response = ['status' => 0, 'message' => 'Failed to delete record.'];
    }
    echo json_encode($response);
    exit();
}

?>