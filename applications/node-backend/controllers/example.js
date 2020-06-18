const router  = require("express").Router();
const Response = require('../util/response_manager');
const HttpStatus = require('../util/http_status');

module.exports = {
    test(req, res) {
        return Response.success(res, {
            error: false,
            message: 'Team Sentry 🥳',
        }, HttpStatus.OK);
    }
};
