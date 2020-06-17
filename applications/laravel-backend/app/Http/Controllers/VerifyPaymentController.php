<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VerifyPaymentController extends Controller
{

	// TODO: TO GET READY FOR TESTING OR PRODUCTION - ALWAYS CHECK !!!
	/*
		// Paystack
		- Update: Line 42; with live secret_key from paystack
		- Implement CRUD API to update db: Line 62
		
		// Flutterwave
		- Update: Line 132; with secret key from flutterwave
		- Implement CRUD API to update db: Line 167
		- FOR PRODUCTION ONLY!!!! - comment line 141 and uncomment line 143
	*/


	// post required params for paystack : transaction_reference
	public function paystack( $transaction_reference ) {
		// For further documentation checkout https://developers.paystack.co/v2.0/docs/verifying-transaction
		// logic to verify paystack payment goes here

		try {

			// Setting this variable as an array because it will be needed for code logic
			$result = array();

			if ( $transaction_reference != "" ) {
				
				// The parameter after verify/ is the transaction reference to be verified
				$url = 'https://api.paystack.co/transaction/verify/'.$transaction_reference;

				// Setup curl command
				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL, $url);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
				curl_setopt($ch, CURLOPT_HTTPHEADER, ['Authorization: Bearer sk_test_e996a68559a8e9b8964587eca1e87cd2563d30ad']); // For Live production change sk_test_e996a68559a8e9b8964587eca1e87cd2563d30ad to new generated SECRET_KEY from paystack

				// Run the curl
				$request = curl_exec($ch);
				curl_close($ch);

				// If the curl was successful
				if ($request) {
					// Decode the result into json 
					$result = json_decode($request, true);

					// For testing to see if it works you can uncomment the next line to get the raw json response
					// print_r($result);
					if($result){
						try {
							// Check if data came in with the result
							if($result['data']){
								// check if something came in with success
								if($result['data']['status'] == 'success'){
									// the transaction was successful, run crud command to update the transaction in our db
									/* IMPLEMENT CRUD API CODE HERE TO UPDATE DB */

									// VerifyPayment return a json response
									return response()
										->json(['status' => 'true', 'message' => 'Transaction was successful'], 200);
								} else {
									// the transaction was not successful, uncomment the next line to see the result, to check why it failed.
									// print_r($result);

									// VerifyPayment return a json response
									return response()
										->json(['status' => 'false', 'message' => 'Transaction was not successful'], 404);
								}
							} else {
								// Get the error message from paystack
								return response()
									->json(['status' => 'false', 'message' => $result['message'] ], 404);
							}
						} catch (\Exception $e) {
							// Return the error message from paystack
							return response()
				            	->json(['status' => 'false', 'message' => $result['message'] ], 400);
						}
					} else {
						// Print out paystack error response
						// print_r($result);

						// VerifyPayment return a json response
						return response()
							->json(['status' => 'false', 'message' => 'Something went wrong while trying to convert the request variable to json' ], 404);
					}
				} else {
					// Something was wrong with the curl command, uncomment next line to see the error
					// var_dump($request);

					// VerifyPayment return a json response
					return response()
						->json(['status' => 'false', 'message' => 'Something went wrong while executing curl' ], 404);
				}
			} else {
				// VerifyPayment return a json response
				return response()
					->json(['status' => 'false', 'message' => 'No transaction reference' ], 400);
			}
		} catch (\Exception $e) {

            return response()
                ->json(['status' => 'false', 'message' => "Unexplainable error!"], 400);
        }
	}

	// post required params for flutterwave : transaction_reference, amount, currency
	public function flutterwave( Request $request, $transaction_reference ) {
		// For further documentation checkout https://developer.flutterwave.com/docs/validate-payment
		// logic to verify flutterwave payment goes here

		try {

			//store the post values in api_params array
	        $api_params = $request->all();

			if ( $transaction_reference != "" && $api_params['amount'] != "" && $api_params['currency'] != "" ) {

				//correct amount from Server to verify is paid in the transaction
				$requested_amount = $api_params['amount'];

				//correct currency from Server to verify in the transaction
				$requested_currency = $api_params['currency'];

				$query = array(
					"SECKEY" => "FLWSECK_TEST-2747094f6615017cd6895a6acb77d869-X", // For Live production change FLWSECK_TEST-2747094f6615017cd6895a6acb77d869-X to new generated SECRET_KEY from flutterwave
					"txref" => $transaction_reference
				);

				$data_string = json_encode($query);

				// Run the curl
				// =======================================
				// Use ( // Use the next line when in development/testing
					$ch = curl_init('https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/verify');
				// ) else ( // Use when in live/production
					// $ch = curl_init('https://api.ravepay.co/flwv3-pug/getpaidx/api/v2/verify');
				// )
				curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
				curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
				curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

				// Run the curl
				$response = curl_exec($ch);
				$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
				$header = substr($response, 0, $header_size);
				$body = substr($response, $header_size);
				curl_close($ch);

				$resp = json_decode($response, true);

				$paymentStatus = $resp['data']['status'];
				$chargedResponsecode = $resp['data']['chargecode'];
				$chargedAmount = $resp['data']['amount'];
				$chargedCurrency = $resp['data']['currency'];

				if (($chargedResponsecode == "00" || $chargedResponsecode == "0") && ($chargedAmount == $requested_amount)  && ($chargedCurrency == $requested_currency)) {
					// the transaction was successful, run crud command to update the transaction in our db
					/* IMPLEMENT CRUD API CODE HERE TO UPDATE DB */

					// VerifyPayment return a json response
					return response()
						->json(['status' => 'true', 'message' => 'Transaction was successful'], 200);
				} else {

					// VerifyPayment return a json response
					return response()
						->json(['status' => 'false', 'message' => 'Transaction was not successful' ], 404);
				}
			} else {

				// VerifyPayment return a json response
				return response()
					->json(['status' => 'false', 'message' => 'No transaction reference or amount or currency' ], 400);
			}
		} catch (\Exception $e) {

            return response()
                ->json(['status' => 'false', 'message' => "Unexplainable error!"], 400);
        }
	}
}
