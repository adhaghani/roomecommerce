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
        $sql = "SELECT StatusName FROM orderstatus WHERE StatusID = :StatusID";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':StatusID', $path[4]);
        $stmt->execute();
        $Details = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($Details);
        break;
}

?>