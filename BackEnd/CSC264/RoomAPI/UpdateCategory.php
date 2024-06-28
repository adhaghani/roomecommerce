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
    $sql = "UPDATE category SET Name = :Name WHERE CategoryID = :CategoryID";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':Name', $Category->Name);
    $stmt->bindParam(':CategoryID', $Category->CategoryID);
    if($stmt->execute()){
        $response = ['status' => 1, 'message' => 'Record Updated successfully.'];
    }else{
         $response = ['status' => 0, 'message' => 'Failed to Update record.'];
    }
    echo json_encode($response);
    exit();
}

?>