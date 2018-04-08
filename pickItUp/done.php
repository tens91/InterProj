<?php

require_once('connection.php');

if(isset($_GET['item_id'])) {
    $sql = "UPDATE items SET done = 1 WHERE item_id = " . $_GET['item_id'] . "  LIMIT 1";
    if ($conn->query($sql) === true) {
        return true;
    } else {
        return false;
    }
} else {
    return false;
}