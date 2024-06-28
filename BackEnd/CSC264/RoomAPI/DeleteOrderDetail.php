<?php 
include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();



header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");


$method = $_SERVER['REQUEST_METHOD'];


if ($method === 'DELETE') {


    $Detailsql = "DELETE FROM orderdetail WHERE OrderID = :OrderID AND ProductID = :ProductID";
    $OrderID = $_GET['OrderID'];
    $ProductID = $_GET['ProductID'];
    $Detailstmt = $conn->prepare($Detailsql);
    $Detailstmt->bindParam(':OrderID', $OrderID);
    $Detailstmt->bindParam(':ProductID', $ProductID);
    if($Detailstmt->execute()){
        $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
    }else{
         $response = ['status' => 0, 'message' => 'Failed to delete record.'];
    }
    echo json_encode($response);
    exit();
}

?>