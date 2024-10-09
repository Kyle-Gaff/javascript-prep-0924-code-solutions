function addTwoNumbers(a, b) {
  return a + b;
}

var sum = addTwoNumbers(5, 5);
console.log('The sum of the two numbers is: ' + sum);

function convertHoursToMinutes(a) {
  return a * 60;
}

const minutes = convertHoursToMinutes(2);
console.log('2 hours is ' + minutes + ' minutes');

function getGreeting(nickname) {
  const greeting = 'Hello, ' + nickname + '!';
  return greeting;
}
const nickname = getGreeting('Kyle');
console.log(nickname);

function addAndMultiplyBy5(a, b) {
  return (a + b) * 5;
}
const sumTimesFive = addAndMultiplyBy5(7, 9);
console.log(sumTimesFive);

function multiplyAndDivideBy5(a, b) {
  return (a * b) / 5;
}
const productDividedByFive = multiplyAndDivideBy5(7, 9);
console.log(productDividedByFive);

function subtractTwoNumbers(a, b) {
  return a - b;
}
const difference = subtractTwoNumbers(9, 7);
console.log(difference);

function getCircleCircumference(r) {
  return r * 2;
}
const circumference = getCircleCircumference(9);
console.log(circumference);

function getFullName(a, b) {
  return a + ' ' + b;
}
const fullName = getFullName('CharLee-Kyle', 'Gaff');
console.log('My name is: ' + fullName);

function cube(a) {
  return a ^ 3;
}
const cubed = cube(7);
console.log(cubed);
