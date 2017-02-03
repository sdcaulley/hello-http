const cowsay = require('cowsay');
const qs = require('querystring');

function getArgs(arg) {
    return arg.split(':')[1];
}

function greetUser(data) {
    let name = 'Stranger';
    let greeting = 'Greetings';
    let plain = false;
    const query = qs.parse(data.query);

    console.log('data: ', data);
    console.log('query: ', query);

    for (let i = 0; i < data.length; i++) {

        if (data[i].includes('name')) {
            name = getArgs(data[i]);
        }
        if (data[i].includes('plain')) {
            plain = true;
        }
        if (data[i].includes('greeting')) {
            greeting = getArgs(data[i]);
        }
    }
    if (plain || data.query === null) {
        return `${greeting}, ${name}!`;
    } else {
        return cowsay.say({
            text: `${greeting}, ${name}!`,
            e: 'oO',
            T: 'U'
        });
    }
}


module.exports = greetUser;