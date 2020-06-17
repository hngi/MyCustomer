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

Route::prefix('v1')->group(function () {
    Route::get('/sms/welcome', 'API\SmsController@index');

    Route::get('/sms/payment-due', 'API\SmsController@payment_due');

    Route::get('/sms/payment-received', 'API\SmsController@payment_received');
});