<?php
include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();



header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");

$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case 'GET':
        $sql = "SELECT * FROM liked";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $sql .= " WHERE UserID = :UserID AND ProductID = :ProductID";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':UserID', $path[5]);
        $stmt->bindParam(':ProductID', $path[4]);
        $stmt->execute();
        $Like = $stmt->fetch(PDO::FETCH_ASSOC);
        if($Like) {
            $response =  1;
        }
        else {
            $response = 0; 
        }
        echo json_encode($response);
        break;
}

?>