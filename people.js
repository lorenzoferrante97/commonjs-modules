// imports

const fullName = require('./name.js');
const hobbies = require('./hobbies.js');

function createPerson () {

    let personName = fullName('Lorenzo', 'Ferrante');
    let personHobbies = hobbies('Videogame', 'Space', 'Code');

    return {
        personName,
        personHobbies
    }
}

let person = createPerson();

console.log("personas: ", person)