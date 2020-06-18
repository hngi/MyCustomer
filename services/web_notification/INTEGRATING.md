# web_notification
This service was built to handle notifications on the MyCustomer website.

## Integrating

Follow these few steps to integrate this service.

1. Extract the public folder to the frontend.
2. Replace local database credentials from the `/database/connect.js` file with the production database credentials.
3. Deploy the service.
4. Frontend should ensure that the `client.js` file only executes when the user is logged in because the `user_id` is to be passed to the `/subscribe` endpoint for custom debt notification.
5. Replace the `/subscribe` relative path in the `/public/client.js` file with an absolute path pointing to the backend.