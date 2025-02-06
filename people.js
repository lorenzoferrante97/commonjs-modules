// imports

const fullName = require('./name.js');
const hobbies = require('./hobbies.js');

function createPerson () {

    return {
        fullName: fullName.fullName('Lorenzo', 'Ferrante'),
        hobbies: hobbies.hobbies('Videogame', 'space', 'code')
    }
}

let person = createPerson();

console.log("personas: ", person)