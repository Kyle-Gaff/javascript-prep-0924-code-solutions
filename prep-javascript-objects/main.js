const person = {
  firstName: 'CharLee-Kyle ',
  lastName: 'Gaff',
  hobby: 'Skating',
};
console.log(person);
const fullName = person.firstName + '' + person.lastName;
console.log('The persons name is ' + fullName);
person.job = 'Unemployed';
console.log("The person's job is " + person.job);
person['previousJob'] = 'Carpet Cleaning';
console.log('Their previous job was: ' + person['previousJob']);
console.log(person);
