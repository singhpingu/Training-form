<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if (empty($_POST['name']) && empty($_POST['email'])) die();
	$y_name = filter_var($_POST["name"], FILTER_SANITIZE_STRING); 
	$y_email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
	$y_number = $_POST["phone"];

	if (empty($y_name)){
		die("Please enter your name");
	}
	if (empty($y_email) || !filter_var($y_email, FILTER_VALIDATE_EMAIL)){
		die("Please enter valid email address");
	}
	if (empty($y_phone)){
		die("Please enter number");
	}
    
$mysqli = new mysqli('localhost', 'root','lgD2UFb@', 'user_data');
	
	//Output any connection error
	if ($mysqli->connect_error) {
		die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
	}	
	
	$statement = $mysqli->prepare("INSERT INTO your_data (user_name, user_email, user_number ) VALUES(?, ?, ?)"); 

	$statement->bind_param('ssi', $y_name, $y_email, $y_number); 	
	if($statement->execute()){
		print "Hello " . $y_name . "!, your message has been saved!";
	}else{
		print $mysqli->error;
	}
	$sql = "SELECT * FROM YOUR_DATA";
$result = mysqli_query($mysqli, $sql); 
echo "<br>";
echo "<table border='1'>";
while ($row = mysqli_fetch_assoc($result)) { 
    echo "<tr>";
    foreach ($row as $field => $value) { 
        echo "<td>" . $value . "</td>"; 
    }
    echo "</tr>";
}
echo "</table>";

?>