<?php include 'db.php'; ?>
<?php

session_start();


clearstatcache();
if (isset($_SESSION['id'])) {
    $msg = 'session is set';
    $user_email = $_SESSION['email'];
    //$detail_arr = array();
    //array_push($detail_arr, $user_email, $InvalidMSG);   
    //$InvalidMSGJSon = json_encode(array('results' => $detail_arr));
    $SuccessMsgJson = json_encode($msg);
    echo $SuccessMsgJson;
} else {
    $json = file_get_contents('php://input');

    $obj = json_decode($json, true);

    $email = $obj['email'];


    $password = $obj['password'];

    $sql = "SELECT * FROM user WHERE Email = '" . $email . "'";
    $result_set = mysqli_query($conn, $sql);
    $result = mysqli_fetch_array($result_set);
    if ($email !== '') {
        if ($password !== '') {
            if ($password == $result['Password']) {
                $_SESSION['id'] = $result['User_id'];
                $_SESSION['email'] = $email;
                $SuccessLoginMsg = 'Data Matched';
                // $detail_arr = array();
                // array_push($detail_arr, $_SESSION['email'], $SuccessLoginMsg);   
                // Converting the message into JSON format.
                // $SuccessLoginJson = json_encode(array('results' => $detail_arr));
                $SuccessMsgJson = json_encode($SuccessLoginMsg);
                // Echo the message.
                echo $SuccessMsgJson;
            } else {
                $user_email = "";
                // If the record inserted successfully then show the message.
                $InvalidMSG = 'Invalid Username or Password Please Try Again';
                $InvalidMSGJSon = json_encode($InvalidMSG);
                // Echo the message.

                // Echo the message.
                echo $InvalidMSGJSon;
            }
        } else {
            $user_email = "";
            // If the record inserted successfully then show the message.
            $InvalidMSG = 'Password is required';
            $InvalidMSGJSon = json_encode($InvalidMSG);
                // Echo the message.

                // Echo the message.
                echo $InvalidMSGJSon;
        }
    } else {
        $user_email = "";
        // If the record inserted successfully then show the message.
        $InvalidMSG = 'Username is required';
        $InvalidMSGJSon = json_encode($InvalidMSG);
                // Echo the message.

                // Echo the message.
        echo $InvalidMSGJSon;
    }
}
?>

