<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Documentation</h2>

            <p>Base url: <code>https://example.com/api/v1/</code></p>

            <p>The phone number should be in a format of <code>256777343217</code>, that is the country code first without the + sign.</p>

            <p><strong>To send a welcome SMS message:</strong></p>
            <p>url: <code>https://example.com/api/v1/sms/welcome?phone-number=</code></p>
            <p>Provide the customer's number as a query string in the <code>phone-number</code> parameter</p>

            <p><strong>To send a Payment reminder SMS message:</strong></p>
            <p>url: <code>https://example.com/api/v1/sms/payment-due?phone-number=number-here&amount=</code></p>
            <p>Provide the customer's number as a query string in the <code>phone-number</code> parameter and the amount owed in the <code>amount</code> query parameter</p>

            <p><strong>To send a Payment received SMS message:</strong></p>
            <p>url: <code>https://example.com/api/v1/sms/payment-received?phone-number=number-here&amount=</code></p>
            <p>Provide the customer's number as a query string in the <code>phone-number</code> parameter and the amount received in the <code>amount</code> query parameter</p>

        </div>
    </body>
</html>
