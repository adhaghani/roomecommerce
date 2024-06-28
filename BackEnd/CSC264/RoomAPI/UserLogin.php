<?php 
include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $Data = json_decode(file_get_contents("php://input"));
    $sql = "SELECT * FROM useraccount WHERE Username = :Username";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':Username', $Data->Username);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
        if($result){
            
            $hashedpassword = $result['Password'];
            if(password_verify($Data->Password, $hashedpassword)){
                echo json_encode(['message' => 'Login Success', 'UserID' => $result['UserID'], 'RoleID' => $result['RoleID']]);
            }else{
                echo json_encode(['message' => 'Wrong Username/Password']);
            }
        }else{
            echo json_encode(['message' => 'Wrong Username/Password']);
        }

}


?>