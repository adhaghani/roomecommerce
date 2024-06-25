<?php



include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect(); 

header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET' : 
        $sql = "SELECT * FROM useraccount";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[4]) && is_numeric($path[4])){
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[4]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        }
        else {
            $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($users);
        break;
    case 'POST':
        $user = json_decode(file_get_contents("php://input"));
        $sql = "INSERT INTO users(id,name, email, mobile, create_at) VALUES (null, :name, :email, :mobile, :create_at)";
        $stmt = $conn->prepare($sql);
        $create_at = date('Y-m-d');
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':mobile', $user->mobile);
        $stmt->bindParam(':create_at', $user->create_at);
        if($stmt->execute()){
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        }else{
             $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;
        case 'PUT':
            $user = json_decode(file_get_contents("php://input"));
            $sql = "UPDATE users SET name = :name, email = :email, mobile = :mobile , updated_at = :updated_at WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $updated_at = date('Y-m-d');
            $stmt->bindParam(':id', $user->id);
            $stmt->bindParam(':name', $user->name);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':mobile', $user->mobile);
            $stmt->bindParam(':updated_at', $user->updated_at);
            
            echo json_encode($response);
            break;
        case 'DELETE' :
        $sql = "DELETE FROM users WHERE id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        print_r($path);
        if(isset($path[4]) && is_numeric($path[4])){
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[4]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        }
        if($stmt->execute()){
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        }else{
             $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($users);
        break;
                
    
}

?>