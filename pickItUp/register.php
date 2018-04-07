<?php

require_once('connection.php');

if(isset($_POST['usernamesignup'])) {
	$username = $_POST['usernamesignup'];
	$useremail = $_POST['emailsignup'];
	$userpassword = $_POST['passwordsignup'];
	$confirm_userpassword = $_POST['passwordsignup_confirm'];
	
	if($userpassword === $confirm_userpassword) {
		$sql = "INSERT INTO accounts (username, email,password,confirm_password,user_hash) 
		VALUES ('".$username."','".$useremail."','".md5($userpassword)."','".md5($confirm_userpassword)."','".rand()."')";

		if ($conn->query($sql) === TRUE) {
            header("Location: ".$url, true, 301);
        } else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}
}
