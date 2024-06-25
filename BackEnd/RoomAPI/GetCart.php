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
        
        $sql = "SELECT * FROM cart";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(!isset($path[5]) && isset($path[4])){
            $sql .= " WHERE UserID = :UserID";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':UserID', $path[4]);
        $stmt->execute();
        $Cart = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($Cart);
        break;
        }
        else if(isset($path[5])){
            $sql = "SELECT Quantity FROM cart";
            $sql .= " WHERE UserID = :UserID AND ProductID = :ProductID";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':UserID', $path[4]);
            $stmt->bindParam(':ProductID', $path[5]);
            $stmt->execute();
            $Cart = $stmt->fetch(PDO::FETCH_ASSOC);
            echo json_encode($Cart);
        }
        else if(!isset($path[4])){
            $sql = "SELECT * FROM cart";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $Cart = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($Cart);
        }
        
}

?>