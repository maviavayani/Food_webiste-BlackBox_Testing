<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "project";

$conn = new mysqli($servername, $username, $password,$dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "CREATE DATABASE IF NOT EXISTS project";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully or already exists<br>";
} else {
    echo "Error creating database: " . $conn->error . "<br>";
}

// Select the database
$conn->select_db("project");

$sql = "CREATE TABLE IF NOT EXISTS popup (
    sno INT AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(50) NOT NULL,
    location VARCHAR(100) NOT NULL,
    phonenum VARCHAR(20) NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "Table popup created successfully or already exists<br>";
} else {
    echo "Error creating table: " . $conn->error . "<br>";
}

$conn->close();
echo "Database setup completed!";
?> 