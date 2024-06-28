<?php 
include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();



header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");


$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $Review = json_decode(file_get_contents("php://input"));
    $sql = "INSERT INTO review (UserID,ProductID,ReviewText,ReviewTitle) VALUES (:UserID,:ProductID,:ReviewText,:ReviewTitle);";
    $stmt = $conn->prepare($sql);
    $DateReview = date('Y-m-d');
    $stmt->bindParam(':UserID', $Review->UserID);
    $stmt->bindParam(':ProductID', $Review->ProductID);
    $stmt->bindParam(':ReviewText', $Review->ReviewText);
    $stmt->bindParam(':ReviewTitle', $Review->ReviewTitle);
    if($stmt->execute()){
        $response = ['status' => 1, 'message' => 'Record created successfully.'];
    }else{
         $response = ['status' => 0, 'message' => 'Failed to create record.'];
    }
    echo json_encode($response);
    exit();
}

?>