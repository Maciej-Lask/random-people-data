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
    firstName: '',
    lastName: '',
    age: getRandomInt(18, 78),
  };

  if (person.gender === 'male') {
    person.firstName = randChoice(namesMale);
  } else {
    person.firstName = randChoice(namesFemale);
  }
  //   a niby kurcze dlaczego to jest złe
  //   person.lastName = randChoice(lastNames);
  person.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  
  person.phoneNumber = '+48 567' + getRandomInt(100000, 999999).toString();

  // Generate email address in the format firstname.lastname@gmail.com
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
// console.log(people);