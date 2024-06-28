<?php 

header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");

include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();



$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM orderrecipient WHERE OrderID = :OrderID";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':OrderID', $path[4]);
        $stmt->execute();
        $Details = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($Details);
        break;
}

?>