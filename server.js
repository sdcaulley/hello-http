const server = require('./lib/http-server');

server.listen(3000, () => {
    console.log('Server is listening');
});