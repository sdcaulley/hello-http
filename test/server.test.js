const chai = require('chai');
const assert = chai.assert;
const http = require('chai-http');
const cowsay = require('cowsay');
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
    it('GET /greet with name argument plain', done => {
        request
            .get('/greet')
            .query('name=Marty')
            .end((err, res) => {
                assert.strictEqual(res.text, "Greetings, Marty!");
                done();
            });
    });

    it('GET /greet with name argument and greeting', done => {
        request
            .get('/greet')
            .query('name=Marty')
            .query('greeting=Hola')
            .end((err, res) => {
                assert.strictEqual(res.text, "Hola, Marty!");
                done();
            });
    });

    it('GET /greet with name, greeting and cow', done => {
        request
            .get('/greet')
            .query('name=Marty')
            .query('greeting=Hola')
            .query('cow=true')
            .end((err, res) => {
                assert.strictEqual(res.text, cowsay.say({
                    text: `Hola, Marty!`,
                    e: 'oO',
                    T: 'U'
                }));
                done();
            });
    });
});