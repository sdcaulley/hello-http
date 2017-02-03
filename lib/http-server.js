const http = require('http');
const url = require('url');
const qs = require('querystring');

function respondToMethod(res, req, parsedUrl) {
    res.statusCode = 404;
    res.end('CANNOT ' + req.method + ' at ' + parsedUrl.path);
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    console.log('parsedUrl: ', parsedUrl);
    const query = qs.parse(parsedUrl.query);

    switch (req.method) {
        case 'POST':
            // res.statusCode = 404;
            // res.end('CANNOT ' + req.method + ' at ' + parsedUrl.path);
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
            res.end('hello world!');
            break;
        default:
            res.statusCode = 404;
            res.end('This request is not supported.');
    }

});

module.exports = server;