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
        $sql = "SELECT ProductID,ProductStock FROM product";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $sql .= " WHERE ProductID = :ProductID";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':ProductID', $path[4]);
        $stmt->execute();
        $products = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($products);
        break;
}

?>