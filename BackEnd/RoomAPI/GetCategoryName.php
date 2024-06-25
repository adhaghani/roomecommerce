<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();



$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {

    case 'GET':
            $sql = "SELECT Name FROM category";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            $sql .= " WHERE CategoryID = :CategoryID";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':CategoryID', $path[4]);
            $stmt->execute();
            $categories = $stmt->fetch(PDO::FETCH_ASSOC);
            echo json_encode($categories);
        break;
}