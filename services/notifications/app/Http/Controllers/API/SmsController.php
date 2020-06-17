<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Twilio\Rest\Client;

class SmsController extends Controller
{
    public function index(Request $request) {
        // retrieve customers number
        $number = $request->input('phone-number');

        try{

            $account_sid = env('TWILIO_ACC_SID');
            $auth_token = env('TWILIO_AUTH_TOKEN');

            // Twilio number 
            $twilio_number = "+12567870868";

            $client = new Client($account_sid, $auth_token);

            if(is_null($number)) {
                return response()->json(['errors' => 'Please specify the customers number']);
            }
            $client->messages->create(
                '+'.$number,
                array(
                    'from' => $twilio_number,
                    'body' => 'Hello there, thank you for registering an account with us.'
                )
            );

            return response()->json(['reponse' => 'sms sent successfully'], 200);

        } catch( \Exception $e) {
            return response()->json(['errors' => $e->getMessage()], 500);
        }
    }

    public function payment_due(Request $request) {
        // retrieve customers number
        $number = $request->input('phone-number');
        $amount = $request->input('amount');

        // send the welcome sms

        try {

            $account_sid = env('TWILIO_ACC_SID');
            $auth_token = env('TWILIO_AUTH_TOKEN');

            // Twilio number 
            $twilio_number = "+12567870868";

            $client = new Client($account_sid, $auth_token);

            if(is_null($number) || is_null($amount)) {
                return response()->json(['errors' => 'Please speciify both the users number and amount they are owed']);
            }

            $client->messages->create(
                '+'.$number,
                array(
                    'from' => $twilio_number,
                    'body' => 'Hello there, you payment of N'.$amount.' is due, please ensure to pay up in the app, Thank you.'
                )
            );

            return response()->json(['response' => 'sms sent successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['errors' => $e->getMessage()], 500);
        }
    }

    public function payment_received(Request $request)
    {
        // retrieve customers number
        $number = $request->input('phone-number');
        $amount = $request->input('amount');

        // send the welcome sms

        try {

            $account_sid = env('TWILIO_ACC_SID');
            $auth_token = env('TWILIO_AUTH_TOKEN');

            // Twilio number 
            $twilio_number = "+12567870868";

            $client = new Client($account_sid, $auth_token);

            if (is_null($number) || is_null($amount)) {
                return response()->json(['errors' => 'Please speciify both the users number and amount received']);
            }

            $client->messages->create(
                '+'.$number,
                array(
                    'from' => $twilio_number,
                    'body' => 'Hello there, your payment of N' . $amount . ' to MyCustomer has been received, Thank you.'
                )
            );

            return response()->json(['response' => 'sms sent successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['errors' => $e->getMessage()], 500);
        }
    }
}
