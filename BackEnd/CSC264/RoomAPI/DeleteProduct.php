<?php
include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();



header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'DELETE') {
    $ProductID = $_GET['ProductID'];
    $sql = "SELECT * FROM product WHERE ProductID = :ProductID";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':ProductID', $ProductID);
    $stmt->execute();
    $product = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($product) {
        $sql = "DELETE FROM product WHERE ProductID = :ProductID";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':ProductID', $ProductID);
        
        try {
            $stmt->execute();
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } catch (PDOException $e) {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];            
        }
    } else {
        $response = ['status' => 0, 'message' => 'Record not found.'];
    }

    echo json_encode($response);
    exit();
}
?>