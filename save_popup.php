<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
// Database connection
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "project";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Database connection failed: " . $conn->connect_error]));
}

// Check if all fields are set
if (!isset($_POST['city'], $_POST['location'], $_POST['contact'])) {
    echo json_encode(["success" => false, "message" => "Missing required fields."]);
    exit;
}

$city = trim($_POST['city']);
$location = trim($_POST['location']);
$phonenum = trim($_POST['contact']);

if ($city === '' || $location === '' || $phonenum === '') {
    echo json_encode(["success" => false, "message" => "All fields are required."]);
    exit;
}

// Insert data into database
$sql = "INSERT INTO popup (city, location, phonenum) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
if (!$stmt) {
    echo json_encode(["success" => false, "message" => "Prepare failed: " . $conn->error]);
    exit;
}
$stmt->bind_param("sss", $city, $location, $phonenum);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Data saved successfully!"]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?> 