<?php

require_once('connection.php');

if(isset($_POST['item_name']) && isset($_POST['user_hash']) && isset($_POST['account_id']) ) {
    $sql = "INSERT INTO items (item_name, hash, account_id, done) 
		VALUES ('".$_POST['item_name']."','".$_POST['user_hash']."','". $_POST['account_id']."', 0)";
    if ($conn->query($sql) === TRUE) {
        header("Location: ".$url."main.php?hash=".$_POST['user_hash']."&account_id=".$_POST['account_id'] );
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
