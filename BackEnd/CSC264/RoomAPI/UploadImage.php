<?php
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers:* ");
header("Access-Control-Allow-Methods:* ");

include 'DbConnect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['productImage'])) {
    $file = $_FILES['productImage'];
  
    // Check if there was an error uploading the file
    if ($file['error'] !== UPLOAD_ERR_OK) {
      http_response_code(500);
      echo json_encode(['error' => 'Failed to upload file']);
      return;
    }
  
    // Specify the directory where you want to save the file
    $uploadDir = "./ProductImage";
  
    // Generate a unique filename
    $filename = uniqid() . '_' . $file['name'];
  
    // Move the uploaded file to the specified directory
    $targetPath = $uploadDir . '/' . $filename;
    if (!move_uploaded_file($file['tmp_name'], $targetPath)) {
      http_response_code(500);
      echo json_encode(['error' => 'Failed to move uploaded file']);
      return;
    }
  
    $sendPath = '/' . $filename;
    // Return the file path as a response
    echo json_encode(['filePath' => $sendPath]);
  } 
  
  else {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
  }






?>