<!DOCTYPE html>
<html>
<head>
  <title>Pick It Up</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <meta name="keywords" content="html5, css3, form, switch, animation, :target, pseudo-class" />
  <link rel="stylesheet" type="text/css" href="css/main.css"/>
  <script type="text/javascript" src="js/jquery.min.js"></script>
  <script type="text/javascript" src="js/scripts.js"></script>
</head>
<body>

<div id="myDIV" class="header">
  <form id="new-item" action="add.php" method="post">
    <h2 style="margin:5px">My Pick It Up List</h2>
    <input type="hidden" name="user_hash" id="user_hash" value="<?php echo $_GET['hash'] ?>"/>
    <input type="hidden" name="account_id" id="account_id" value="<?php echo $_GET['account_id'] ?>"/>
    <input type="text" name="item_name" id="item_name" placeholder="Add an item to be Picked Up...">
    <input type="submit" class="addBtn" name="addBtn" value="Add" />
  </form>
</div>

<?php    
require_once 'connection.php';

$query = "SELECT * FROM items WHERE hash = '".$_GET['hash']."' ORDER BY item_id ASC";
$results = $conn->query($query);

if($results->num_rows > 0) {
  echo '<ul id="myUL">';
  while($row = $results->fetch_object()) {   
    $cheked = ($row->done === '1') ? 'checked': '';
    echo '<li id="'.$row->item_id.'" class="item '.$cheked.'">';
    echo '<a class="done" href="done.php?item_id='.$row->item_id.'">'.$row->item_name.'</a>';
    echo '<span class="close"><a class="delete" href="delete.php?item_id='.$row->item_id.'">×</a></span>';
    echo '</li>';
  } 
  echo '</ul>';
} else {
  echo "<p>There are zero items. Add one now! </p>";
} 
?>

<!-- AddToAny BEGIN -->
<div class="a2a_kit a2a_kit_size_32 a2a_default_style">
<a class="a2a_dd" href="https://www.addtoany.com/share"></a>
<a class="a2a_button_whatsapp"></a>
<a class="a2a_button_twitter"></a>
<a class="a2a_button_linkedin"></a>
</div>
<script async src="https://static.addtoany.com/menu/page.js"></script>
<!-- AddToAny END -->
</body>
</html>