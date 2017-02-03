const cowsay = require('cowsay');

function getArgs(arg) {
    return arg.split(':')[1];
}

function greetUser(data) {
    let name = data.name || 'Stranger';
    let greeting = data.greeting || 'Greetings';
    let plain = data.plain || true;

    console.log('data: ', data);


    // for (let i = 0; i < data.length; i++) {

    //     if (data[i].includes('name')) {
    //         name = getArgs(data[i]);
    //     }
    //     if (data[i].includes('plain')) {
    //         plain = true;
    //     }
    //     if (data[i].includes('greeting')) {
    //         greeting = getArgs(data[i]);
    //     }
    // }
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