const express = require('express');
const router = express.Router();
const verifyController = require("./../controllers/verify-controller");

router.get('/verify', verifyController.initialverification)
router.get('/verify-phone', verifyController.verifyPhone)

module.exports = router
