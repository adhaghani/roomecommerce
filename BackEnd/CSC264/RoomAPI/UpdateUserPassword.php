<?php 
include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();



header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $Data = json_decode(file_get_contents("php://input"));
    $sql = "UPDATE useraccount SET Password = :Password WHERE UserID = :UserID";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':UserID', $Data->UserID);
    $hashedpassword = password_hash($Data->Password, PASSWORD_DEFAULT);
    $stmt->bindParam(':Password', $hashedpassword);

    if($stmt->execute()){
        $response = ['status' => 1, 'message' => 'Record Updated successfully.'];
    }else{
        $response = ['status' => 0, 'message' => 'Failed to Update record.'];
    }
    echo json_encode($response);
    exit();
}
?>