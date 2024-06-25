<?php 
include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();





header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");


$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $Category = json_decode(file_get_contents("php://input"));
    $sql = "INSERT INTO category (Name) VALUES (:Name);";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':Name', $Category->Name);
    if($stmt->execute()){
        $response = ['status' => 1, 'message' => 'Record created successfully.'];
    }else{
         $response = ['status' => 0, 'message' => 'Failed to create record.'];
    }
    echo json_encode($response);
    exit();
}

?>