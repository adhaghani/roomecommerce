<?php 
include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();



header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");


$method = $_SERVER['REQUEST_METHOD'];


if ($method === 'DELETE') {
    $sql = "DELETE FROM liked WHERE UserID = :UserID AND ProductID = :ProductID";
    $UserID = $_GET['UserID'];
    $ProductID = $_GET['ProductID'];
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':UserID', $UserID);
    $stmt->bindParam(':ProductID', $ProductID);
    if($stmt->execute()){
        $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
    }else{
         $response = ['status' => 0, 'message' => 'Failed to delete record.'];
    }
    echo json_encode($response);
    exit();
}

?>