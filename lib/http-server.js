const http = require('http');
const url = require('url');
const greet = require('./greet');
const qs = require('querystring');
const fact = require('./interestingFact');

function parsePath(path, args) {
    const newPath = path.split('?');

    switch (newPath[0]) {
        case '/':
            return 'Hello world!';
            break;

        case '/greet':
            return greet(args);
            break;
    }
}



const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const path = parsedUrl.path;
    const query = qs.parse(parsedUrl.query);

    function receiveData(req, callback) {
        let body = '';
        req.setEncoding('utf8');

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            let data = callback(body);

            console.log('data: ', data);

            let dataString = JSON.stringify(data);
            console.log('dataString: ', dataString);
            res.end(dataString);
        });
    }


    switch (req.method) {
        case 'POST':
            receiveData(req, fact.addFacts);
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
            let letResponse = parsePath(path, query);
            res.end(letResponse);
            break;
        default:
            res.statusCode = 404;
            res.end('This request is not supported.');
    }

});

module.exports = server;