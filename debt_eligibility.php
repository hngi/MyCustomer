<?php
function checkEmpty($arr)
{
    foreach ($arr as $key => $item) {
        if ($arr[$key] == "") {
            return true;
        }
    }
}

if (checkEmpty($_GET)) {
    $response_data = [
        "message" => "there is an empty field in the form request",
        "result" => false
    ];
    echo  json_encode($response_data);
    die();
} else {
    $i = 0;
    $queryParam = '';
    //prepares the query parameter for getting the customer details from the database via the customer crud API
    if (count($_GET) > 1) {
        foreach ($_GET as $key => $item) {
            if ($i == 0) {
                $queryParam .= "?$key=$item";
            } else {
                $queryParam .= "&amp;$key=$item";
            }
            $i++;
        }
    } else {
        $requestKeys = array_keys($_GET);
        $queryParam = '/' . $_GET[$requestKeys[0]];
    }
    //Sends a get request to the  the customer crud API
    $ch = curl_init();
    $crud_api_url .= $queryParam; //adds the query param to the customer crud API
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, "$crud_api_url");
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec($ch); //stores the response
    $err = curl_error($ch);
    curl_close($ch);
    if ($err) {
        $response_data = [
            "message" => "error connecting to database",
            "result" => false //check for errors
        ];
        echo  json_encode($response_data);
        die();
    }
    if ($response) {
        $customer_data = json_decode($response); //converts response to object
        $customer_registration_date = $customer_data->reg_date; //gets the customer registraton date
        $customer_total_debt = $customer_data->total_debt; // gets the customer total debt
        $customer_total_payment = $customer_data->total_payments; // gets the customer total payments
        $date1 = date_create($customer_registration_date);
        $text = date('Y-m-j');
        $date = date_create($text);
        $diff = date_diff($date1, $date);
        if ($diff < 30) { //check the difference between the currente date and customer registration date
            $response_data = [
                "message" => "customer can not borrow",
                "result" => false
            ];
            echo  json_encode($response_data); //customer can not borrow
            die();
        } else {
            if ($customer_total_debt < 1) { //checks if the customer as no oustanding debt
                $response_data = [
                    "message" => "customer can borrow",
                    "result" => true
                ];
                echo  json_encode($response_data); //customer can borrow
                die();
            }
            if ($customer_total_debt < $customer_total_payment) { //check if the debt is not more than the total payment of the customer
                //calculates the debt rate by percentage
                $customer_debt_rate = round(($customer_total_debt / $customer_total_payment) * 100);
                if ($customer_debt_rate < 70) { //check if the debt rate is less than 70%
                    $response_data = [
                        "message" => "customer can borrow",
                        "result" => true
                    ];
                    echo  json_encode($response_data); //customer can borrow
                    die();
                } else { //customer can not borrow
                    $response_data = [
                        "message" => "customer can not borrow",
                        "result" => false
                    ];
                    echo  json_encode($response_data);
                    die();
                }
            } else {
                $response_data = [
                    "message" => "customer can not borrow",
                    "result" => false
                ];
                echo  json_encode($response_data); //customer cannot borrow if the total debt is greater than total payment made
                die();
            }
        }
    }
}
