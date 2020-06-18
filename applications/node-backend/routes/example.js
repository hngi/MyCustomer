const express = require('express');

const router = express.Router();

const ExampleController = require('../controllers/example')

//Maintain the endpoint naming convention
router.get('/', ExampleController.test);

module.exports = router;
