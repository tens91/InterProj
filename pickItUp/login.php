<?php

require_once('connection.php');

$username = $_POST['username'];
$userpassword = md5($_POST['password']);

$sql = "SELECT username, account_id, user_hash
FROM accounts 
WHERE (username = '".$username."' OR email = '".$username."') AND password = '".$userpassword."'";
$result = $conn->query($sql);
if ($result->num_rows > 0){
	while($row = $result->fetch_assoc()) {
		header("Location: ".$url."main.php?hash=".$row['user_hash']."&account_id=".$row['account_id'], true, 301);
		exit();
	}
}else{
    header("Location: ". $url);
}