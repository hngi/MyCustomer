## Description

SMS service for phone number verification. Sends OTP to phone number for verification.
**NOTE:** Limited SMS trials available on test version and can only be sent to the registered number. To get unlimited SMS, go to [https://messagebird.com](https://messagebitd.com) to buy an upgrade.

## Endpoints

* **/verify-phone**
* **/verify**

## Usage

* **RUN __npm install__** to install dependencies
* **RUN __npm start__** to start the server on port **3000**
* Send a post request to **/verify-phone** with **phone number** as **x-www-form-urlencoded** to send an a phone verification OTP to the phone number. The request should call a **__phone__** parameter in the body.

* To verify the token sent to the phone number, send a **POST** request to **/verify** to verify the phone number.
