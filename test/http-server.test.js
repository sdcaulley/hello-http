const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../lib/http-server');

describe('testing the http server that I made', () => {
    const request = chai.request(server);

    it('provides a fact', done => {
        request
            .get('/fact')
            .end((err, response) => {
                assert.strictEqual(response.text, 'a more secure version of http is called http, it encrypts all of the information it sends and receives');
                done();
        });
    });
    it('gives a salutation with a name', done => {
        request
        .get('/greeting/claire?salutation=hello')
        .end((err, response) => {
            assert.strictEqual(response.text, 'hello claire')
            done();
        })
    })
});