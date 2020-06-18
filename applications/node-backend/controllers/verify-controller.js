const Response = require('../util/response_manager');
const HttpStatus = require('../util/http_status');
const express = require('express');

const router = express.Router();

router.use(require("body-parser").urlencoded({extended: true}));
messagebird = require('messagebird')('PRpFg1JwvolNubJ3XRnSRGtP0');

module.exports = {
    initialverification(req, res) {
        try {
            const id = req.body.id
            const token = req.body.token
            messagebird.verify.verify(id, token, (err, response) => {
                if (err) {
                    res.status(err.statusCode).json({
                        status: "Bad request",
                        message: err.errors[0].description
                    });
                } else {
                    res.status(200).json({
                        status: "sucess",
                        message: "Phone number verification successful"
                    })
                }
            })
        }catch (e) {

        }
    },

    verifyPhone(req, res) {
        var params = {
            originator: "MyCustomer"
        };

        messagebird.verify.create(req.body.phone, params, function (err, response) {
            if (err) {
                res.status(401).json({
                    status: "Fail",
                    message: err.errors[0].description
                })
            }
            res.render("verify-phone.ejs", {
                response
            });
        });
    }
};
