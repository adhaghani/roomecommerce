<?php

include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();



header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");

$method = $_SERVER['REQUEST_METHOD'];

if ($method !== 'GET') {
    // Handle other request methods if needed
} else {
    $sql = "SELECT * FROM useraccount";
    $path = explode('/', $_SERVER['REQUEST_URI']);
    if (isset($path[4]) && is_string($path[4])) {
        $id = $path[4];
        
        $sql .= " WHERE UserID = :UserID";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':UserID', $path[4]);
        $stmt->execute();
        $users = $stmt->fetch(PDO::FETCH_ASSOC);
    } else {
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    echo json_encode($users);
}
?>