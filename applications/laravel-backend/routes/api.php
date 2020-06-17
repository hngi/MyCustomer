<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function() {
	// For paystack just transaction_reference is needed
	// Test: T160475444325002
	Route::get('/verifypayment/paystack/{transaction_reference}', 'VerifyPaymentController@paystack');

	// For flutterwave, amount and currency param are needed
	// TEST: Rave-Pages422429332581 ; Amount: 7500 ; Currency: NGN
	Route::get('/verifypayment/flutterwave/{transaction_reference}', 'VerifyPaymentController@flutterwave');
});
