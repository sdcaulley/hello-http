const http = require('http');
const url = require('url');
const qs = require('querystring');

function respondToMethod() {
    res.statusCode = 404;
    res.end('CANNOT ' + req.method + parsedUrl);
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const query = qs.parse(parsedUrl.query);

    switch (req.method) {
        case 'POST':
            respondToMethod(req, res, parsedUrl);
            break;
        case 'PATCH':
            respondToMethod(req, res, parsedUrl);
            break;
        case 'PUT':
            respondToMethod(req, res, parsedUrl);
            break;
        case 'DELETE':
            respondToMethod(req, res, parsedUrl);
            break;
        case 'GET':
            res.end('hello world');
            break;
        default:
            res.statusCode = 404;
            res.end('This request is not supported.');
    }

});

module.exports = server;