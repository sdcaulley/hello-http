const http = require('http');
const url = require('url');
const greet = require('./greet');

function parsePath(parsedUrl) {

    switch (parsedUrl.path) {
        case '/':
            return 'Hello world!';

        case '/greet':
            return greet(parsedUrl);
            break;
    }
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    let response;

    switch (req.method) {
        case 'POST':
            res.statusCode = 404;
            res.end('CANNOT ' + req.method + ' at ' + parsedUrl.path);
            break;
        case 'PATCH':
            res.statusCode = 404;
            res.end('CANNOT ' + req.method + ' at ' + parsedUrl.path);
            break;
        case 'PUT':
            res.statusCode = 404;
            res.end('CANNOT ' + req.method + ' at ' + parsedUrl.path);
            break;
        case 'DELETE':
            res.statusCode = 404;
            res.end('CANNOT ' + req.method + ' at ' + parsedUrl.path);;
            break;
        case 'GET':
            response = parsePath(parsedUrl);
            console.log('response: ', response);
            res.end(response);
            break;
        default:
            res.statusCode = 404;
            res.end('This request is not supported.');
    }

});

module.exports = server;