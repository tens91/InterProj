<?php

require_once('connection.php');

if(isset($_GET['item_id'])) {
    $sql = "DELETE from items WHERE item_id = '".$_GET['item_id']."'";
    if ($conn->query($sql) === true) {
		return true;
    } else {
        return false;
    }
} else {
    return false;
}
