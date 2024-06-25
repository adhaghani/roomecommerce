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
        $sql = "SELECT ProductID,Quantity FROM orderdetail WHERE OrderID = :OrderID";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':OrderID', $path[4]);
        $stmt->execute();
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($products);
        break;
}

?>