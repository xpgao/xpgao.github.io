<?php
    $servername = "remotemysql.com";
    $username = "WuCiVprOyc";
    $password = "o3omkCQO3a";
    $dbname = "WuCiVprOyc";



    $question= "";
    $option0= "";
	$option1= "";
	$option2= "";
	$option3= "";
	$anwser= "";
	

    if(isset($_POST['question'])) {
        $question=$_POST['question'];
    }

    if(isset($_POST['option0'])){
        $option0=$_POST['option0'];
    }
	if(isset($_POST['option1'])) {
        $option1=$_POST['option1'];
    }
	if(isset($_POST['option2'])) {
        $option2=$_POST['option2'];
    }
	if(isset($_POST['option3'])) {
        $option3=$_POST['option3'];
    }
	if(isset($_POST['anwser'])) {
        $anwser=$_POST['anwser'];
    }

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    $sql = "INSERT INTO questions (question, option1, option2, option3, option4, anwser) VALUES ('$question','$option0','$option1','$option2','$option3','$anwser')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

    // header("Location: leaderboard.php");
    // die();

?>