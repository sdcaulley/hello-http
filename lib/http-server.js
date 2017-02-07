const http = require('http');
const qs = require('querystring');
const url = require('url');

const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url);
    const query = qs.parse(parsedUrl.query);
    const path = parsedUrl.pathname;
    const greetingPath = path.split('/');
    //console.log(request.method);
    //console.log(request.url);
    //console.log(qs.parse(request.query));
    //console.log(url.parse(request.url));
    //console.log(qs.parse(parsedUrl.query));
    if(request.method === 'GET') {
        
         if(greetingPath[1] === 'fact') {
             response.write('a more secure version of http is called http, it encrypts all of the information it sends and receives');
             response.end();
         } 
         else if (greetingPath[1] === 'greeting') {
             if(query.salutation) {
                 if(greetingPath[2]) {
                     var salute = greetingPath[2].split('?');
                     response.write(query.salutation + ' ' + salute[0]);
                     response.end();
                 }
                 if (!greetingPath[2]) {
                    response.write(query.salutation + ' stranger');
                    response.end();
                 }
             }
             else {
                if(greetingPath[2]) {
                    response.write('hello ' + greetingPath[2]);
                    response.end();
                }
                if (!greetingPath[2]) {
                    response.write('hello stranger!');
                    response.end();
                }
            }
        }
    }
    else {
        reponse.statusCode = 404;
        response.write(`cannot ${request.method} ${parsedUrl.pathname}`);
        response.end();
    }
});    

module.exports = server;