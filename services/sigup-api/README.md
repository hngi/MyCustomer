# DOCUMENTATION

This API form data submit from signup form and validate them before sending the data to the CRUD API for database storage.

## Requirements

This API requires the CUSTOMER CRUD API to work work

## Response

The API returns a JSON with message, result and data properties.

1. Message is a string of validation or form submission messages.
2. Result is a Boolean which is true for successful form submission and false for validation error
3. Data is object which is set to default as empty but returns the user form data on successful registeration
