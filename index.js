const os = require('os');
const fs = require('node:fs/promises');


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function randChoice(arr) {
  const randomIndex = getRandomInt(0, arr.length);
  return arr[randomIndex];
}
const genders = ['female', 'male'];
const namesMale = ['John', 'Paul', 'George', 'Ringo'];
const namesFemale = ['Mary', 'Patricia', 'Linda', 'Barbara'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'];


const people = [] ;


for (let i = 0; i < 20; i++) {
  const person = {
    gender: randChoice(genders),
    age: getRandomInt(18, 78),
    phoneNumber: '+48 567' + getRandomInt(100000, 999999).toString(),
    // lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
    lastName: randChoice(lastNames),
  };
  person.firstName = randChoice(person.gender === 'male' ? namesMale : namesFemale),
  person.email = `${person.firstName.toLowerCase()}.${person.lastName.toLowerCase()}@gmail.com`;

  people.push(person);
}

const peopleJSON = JSON.stringify(people, null, 2);

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) {
    console.log('Error occurred:', err);
    throw err;
  }
  console.log('The file has been saved!');
});