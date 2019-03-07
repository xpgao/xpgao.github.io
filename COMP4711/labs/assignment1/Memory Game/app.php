<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "game";



// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = 'INSERT INTO leaderboard (name, score) VALUES (' +$_POST["Name"]+', '+$_POST["score"]+ ')';

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
header("Location: index.html");
die();
?>