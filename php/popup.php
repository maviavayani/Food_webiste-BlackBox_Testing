<?php
header('Content-Type: application/json');
error_reporting(E_ALL);
ini_set('display_errors', 1);

$city = trim($_POST['city'] ?? '');
$location = trim($_POST['location'] ?? '');
$phonenum = trim($_POST['contact'] ?? '');

if (!preg_match('/^03\d{9}$/', $phonenum)) {
    echo json_encode(['success' => false, 'message' => 'Invalid phone number. Must be 11 digits and start with 03.']);
    exit;
}

if ($city && $location && $phonenum) {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "project";
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        echo json_encode(['success' => false, 'message' => 'Database connection failed: ' . $conn->connect_error]);
        exit;
    }
    $conn->query("CREATE TABLE IF NOT EXISTS popup (
        sno INT AUTO_INCREMENT PRIMARY KEY,
        city VARCHAR(50) NOT NULL,
        location VARCHAR(100) NOT NULL,
        phonenum VARCHAR(20) NOT NULL
    )");
    $stmt = $conn->prepare("INSERT INTO popup (city, location, phonenum) VALUES (?, ?, ?)");
    if (!$stmt) {
        echo json_encode(['success' => false, 'message' => 'Prepare failed: ' . $conn->error]);
        exit;
    }
    $stmt->bind_param("sss", $city, $location, $phonenum);
    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Data saved successfully!']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error: ' . $stmt->error]);
    }
    $stmt->close();
    $conn->close();
} else {
    echo json_encode(['success' => false, 'message' => 'All fields are required.']);
} 
echo "database already created";