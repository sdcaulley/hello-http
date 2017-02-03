const cowsay = require('cowsay');

function getArgs(arg) {
    return arg.split(':')[1];
}

function greetUser(data) {
    let name = 'Stranger';
    let greeting = 'Greetings';
    let plain = false;

    for (let i = 0; i < data.length; i++) {

        if (data[i].includes('--n')) {
            name = getArgs(data[i]);
        }
        if (data[i].includes('--p')) {
            plain = true;
        }
        if (data[i].includes('--g')) {
            greeting = getArgs(data[i]);
        }
    }
    if (plain) {
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