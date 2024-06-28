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
            $sql = "SELECT * FROM category";
            $stmt = $conn->query($sql);
            $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            // Return the categories as JSON
            echo json_encode($categories);
        
        break;
}