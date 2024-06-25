<?php
include 'DbConnect.php';

$db = new DbConnect;
$conn = $db->connect();



header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");

$method = $_SERVER['REQUEST_METHOD'];



if($method === 'POST'){
    $OrderData = json_decode(file_get_contents("php://input"));
    $orderDetailSql = "INSERT INTO orderdetail (OrderID, ProductID, Quantity) VALUES (:OrderID, :ProductID, :Quantity)";
    $orderRecipientSql = "INSERT INTO orderrecipient (OrderID, FirstName, LastName, PhoneNumber, AddressLine1, AddressLine2, PostCode, City, Country) VALUES (:OrderID, :FirstName, :LastName, :PhoneNumber, :AddressLine1, :AddressLine2, :PostCode, :City, :Country)";
    
    try {
        //get Latest OrderID
        $getLatestIdSql = "SELECT MAX(OrderID) AS latest_id FROM ordertable";
        $getLatestIdStmt = $conn->prepare($getLatestIdSql);
        $getLatestIdStmt->execute();
        $latestIdResult = $getLatestIdStmt->fetch(PDO::FETCH_ASSOC);
        $latestOrderID = $latestIdResult['latest_id'];
        
        // Insert order recipient data
        $orderRecipientStmt = $conn->prepare($orderRecipientSql);
        $orderRecipientStmt->bindParam(':OrderID', $latestOrderID);
        $orderRecipientStmt->bindParam(':FirstName' , $OrderData->orderRecipient->FirstName);
        $orderRecipientStmt->bindParam(':LastName' , $OrderData->orderRecipient->LastName);
        $orderRecipientStmt->bindParam(':PhoneNumber' , $OrderData->orderRecipient->PhoneNumber);
        $orderRecipientStmt->bindParam(':AddressLine1' , $OrderData->orderRecipient->AddressLine1);
        $orderRecipientStmt->bindParam(':AddressLine2' , $OrderData->orderRecipient->AddressLine2);
        $orderRecipientStmt->bindParam(':PostCode' , $OrderData->orderRecipient->PostCode);
        $orderRecipientStmt->bindParam(':City' , $OrderData->orderRecipient->City);
        $orderRecipientStmt->bindParam(':Country' , $OrderData->orderRecipient->Country);
        $orderRecipientStmt->execute();
    
        // Insert order detail data
        foreach ($OrderData->orderDetail as $detail) {
            $orderDetailStmt = $conn->prepare($orderDetailSql);
            $orderDetailStmt->bindParam(':OrderID', $latestOrderID);
            $orderDetailStmt->bindParam(':ProductID', $detail->ProductID);
            $orderDetailStmt->bindParam(':Quantity', $detail->Quantity);
            $orderDetailStmt->execute();
        }
    
    
    
        echo "Order data inserted successfully!";
    } catch (Exception $e) {
        echo "Error inserting order data: " . $e->getMessage();
    }
    
    
        
    }





exit();
?>