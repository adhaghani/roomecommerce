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
        $sql = "SELECT * FROM ordertable";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        
        if(isset($path[4])){
            $sql .= " WHERE OrderID = :OrderID";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':OrderID', $path[4]);
            $stmt->execute();
            $Order = $stmt->fetch(PDO::FETCH_ASSOC);
            echo json_encode($Order);
        }
        else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $Order = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($Order);
            break;
        }
       

}

?>