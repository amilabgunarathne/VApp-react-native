<?php include 'db.php'; ?>
<?php
session_start();
//$id=$_SESSION["id"];

$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$email = $obj['email'];
$password = $obj['password'];
$date = $obj['date'];
$date2 = $obj['date2'];
$name = $obj['name'];
$number = $obj['number'];
$text = $obj['text'];
$text1 = $obj['text1'];

$sql = "INSERT INTO user(Email,Password,Car_name,Car_number,Rev_exp,Ins_exp,Eco_exp,photo,Car) VALUES('" . $email . "','" . $password . "','" . $name . "','" . $number . "','" . $date . "','" . $date2 . "','" . $text . "','photo name','" . $text . "')";
$result = mysqli_query($conn,$sql);

//$error = mysqli_error($conn);

if($result){
    $msg = "You have registered successfully";
    // $SuccessMsgJson = json_encode(array('results' => $details));
    $SuccessMsgJson = json_encode($msg);
    // Echo the message.
    echo $SuccessMsgJson;
}else{
    $msg = "Registrtion failed";
    // $SuccessMsgJson = json_encode(array('results' => $details));
    $SuccessMsgJson = json_encode($msg);
    // Echo the message.
    echo $SuccessMsgJson;
}

?>