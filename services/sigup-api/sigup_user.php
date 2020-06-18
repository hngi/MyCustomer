<?php

function sanitize_input($input)
{
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
}

function send_response($result = false, $message = '', $data = [])
{
    $response_data = [
        "message" => $message,
        "result" => $result,
        "data" => $data
    ];
    echo json_encode($response_data);
    die();
}

$_POST['first_name'] !== '' ? $first_name = sanitize_input($_POST['first_name'])  : $errorCount++;
$_POST['last_name'] !== '' ? $last_name = sanitize_input($_POST['last_name'])  : $errorCount++;
$_POST['email'] !== '' ? $email = $_POST['email']  : $errorCount++;
$_POST['password'] !== '' ? $password = sanitize_input($_POST['password'])  : $errorCount++;
$_POST['phonenumber'] !== '' ? $phonenumber = sanitize_input($_POST['phonenumber'])  : $errorCount++;

if ($errorCount > 0) {
    $session_message = 'Submission failed, you have ' . $errorCount . ' blank field';
    if ($errorCount > 1) {
        $session_message .= "s";
    }
    $session_message .= ' in your form submmision';
    send_response(false, $session_message);
}

if (!preg_match("/^[a-z]+$/i", $first_name) || !preg_match("/^[a-z]+$/i", $last_name)) {
    send_response(false, 'Names cannot have numbers and space between');
}

if (strlen($first_name) < 2 || strlen($first_name) > 18  || strlen($last_name) < 2 || strlen($last_name) > 18) {
    send_response(false, 'Name cannot be less than two or greater than 18 numbers');
}
// if (!preg_match("/^[^0-9\W][a-z0-9_]+$/i", $username)) {
//     $response_data = [
//         "message" => 'Username cannot start with a number or symbol',
//         "result" => false
//     ];
//     echo  json_encode($response_data);
//     die();
// }
// if (strlen($username) < 2 || strlen($username) > 18) {
//     echo '';
//     $response_data = [
//         "message" => 'Username cannot be less than two or greater than 18 numbers',
//         "result" => false
//     ];
//     echo  json_encode($response_data);
//     die();
// }

if (!preg_match("/[a-z0-9.-]+@[a-z-]+\.(com|ng|net|co|org|ng|info)/i", sanitize_input($email))) {

    send_response(false, 'Invalid email submitted');
}
if (strlen($email) < 5) {
    send_response(false, 'Email cannot not be less than 5');
}

if (!preg_match("/^\d{10}$/", $phonenumber)) {
    send_response(false, 'Invalid phone number');
}

if (strlen($phonenumber) < 9 || strlen($phonenumber) > 18) {
    send_response(false, 'phone cannot be less than nine or greater than 18 in length');
} else {
    $fullname = $first_name . " " . $last_name;
    $user = [
        'customer_name' => $fullname,
        'password' => password_hash($password, PASSWORD_DEFAULT),
        'customer_email' => $email,
        'customer_phone' => $phonenumber

    ];
    $post_data = '';
    $i = 0;
    $url = "CUSTOMER CRUD API POST ROUTE";
    $id = '/' . $_POST['id'];
    foreach ($user as $key => $item) {
        if ($key != "url" && $key != 'id') {
            if ($i == 0) {
                $post_data .= "$key=$item";
            } else {
                $post_data .= "&$key=$item";
            }
            $i++;
        }
    }
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
    curl_setopt($ch, CURLOPT_URL, "{$url}");
    $respone = curl_exec($ch);
    $err = curl_error($ch);
    if ($err) {
        send_response(false, "error connecting to database");
    }
    if ($respone) {
        send_response(true, "Data sent", $respone);
    }
    curl_close($ch);
}
