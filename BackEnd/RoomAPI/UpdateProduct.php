<?php 
include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();



header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $Product = json_decode(file_get_contents("php://input"));
    $sql = "UPDATE product SET Name = :Name, Description = :Description, Price = :Price, ProductStock = :ProductStock, CategoryID = :CategoryID, PicturePath = :PicturePath WHERE ProductID = :ProductID";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':Name', $Product->Name);
    $stmt->bindParam(':Description', $Product->Description);
    $stmt->bindParam(':Price', $Product->Price);
    $stmt->bindParam(':ProductStock', $Product->ProductStock);
    $stmt->bindParam(':CategoryID', $Product->CategoryID);
    $stmt->bindParam(':PicturePath', $Product->PicturePath);
    $stmt->bindParam(':ProductID', $Product->ProductID);
    if($stmt->execute()){
        $response = ['status' => 1, 'message' => 'Record Updated successfully.'];
    }else{
        $response = ['status' => 0, 'message' => 'Failed to Update record.'];
    }
    echo json_encode($response);
    exit();
}
?>