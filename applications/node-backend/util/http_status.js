class HTTPStatus {}

Object.defineProperty(HTTPStatus, 'OK', {
    value: 200,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(HTTPStatus, 'CREATED', {
    value: 201,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(HTTPStatus, 'ACCEPTED', {
    value: 202,
    writable: false,
    enumerable: true,
    configurable: false,
});


Object.defineProperty(HTTPStatus, 'BAD_REQUEST', {
    value: 400,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(HTTPStatus, 'UNAUTHORIZED', {
    value: 401,
    writable: false,
    enumerable: true,
    configurable: false,
});


Object.defineProperty(HTTPStatus, 'FORBIDDEN', {
    value: 403,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(HTTPStatus, 'NOT_FOUND', {
    value: 404,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(HTTPStatus, 'METHOD_NOT_ALLOWED', {
    value: 405,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(HTTPStatus, 'NOT_ACCEPTABLE', {
    value: 406,
    writable: false,
    enumerable: true,
    configurable: false,
});


Object.defineProperty(HTTPStatus, 'PROXY_AUTHENTICATION_REQUIRED', {
    value: 407,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(HTTPStatus, 'REQUEST_TIMEOUT', {
    value: 408,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(HTTPStatus, 'INTERNAL_SERVER_ERROR', {
    value: 500,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(HTTPStatus, 'NOT_IMPLEMENTED', {
    value: 501,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(HTTPStatus, 'BAD_GATEWAY', {
    value: 502,
    writable: false,
    enumerable: true,
    configurable: false,
});

Object.defineProperty(HTTPStatus, 'SERVICE_UNAVAILABLE', {
    value: 503,
    writable: false,
    enumerable: true,
    configurable: false,
});

module.exports = HTTPStatus;
