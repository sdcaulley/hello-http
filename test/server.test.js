const chai = require('chai');
const assert = chai.assert;
const http = require('chai-http');
const server = require('../lib/http-server');

chai.use(http);

describe('basic server function', () => {
    const request = chai.request(server);

    it('GET / say "helllo world"', done => {
        request
            .get('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'Hello world!');
                done();
            });
    });

    it('POST says 404 not supported', done => {
        request
            .post('/')
            .end((err, res) => {
                assert.strictEqual(res.text, 'CANNOT POST at /');
                done();
            });
    });
    it('GET /greet returns greeting using flags', done => {
        request
            .get('/greet')
            .end((err, res) => {
                assert.strictEqual(res.text, "Greetings, Stranger!");
                done();
            });
    });
});