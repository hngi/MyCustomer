const Response = require('../util/response_manager');
const HttpStatus = require('../util/http_status');

exports.get404 = (req, res, next) => {
    return Response.failure(res, {
        error: true,
        message: 'Page Not Found',
        response: 'Page Not Found'
    }, HttpStatus.NOT_FOUND);
};

exports.get500 = (req, res, next) => {
    return Response.failure(res, {
        error: true,
        message: 'Error',
        response: 'Error'
    }, HttpStatus.INTERNAL_SERVER_ERROR);
};
