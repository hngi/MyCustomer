const express = require('express');
const router = express.Router();
const ExampleController = require('../controllers/mailer')

//Maintain the endpoint naming convention
router.post('/example', ExampleController.action);

module.exports = router;
