// Normal Function Definition
function isNumberZero(number) {
  return number === 0;
}

// Function Expression
// These two are exactly the same
// Anonymous function assigned to a variable is one way to think of these
const isNumberZero = (element) => element === 0; // same as below but less syntax
const isNumberZero = (element) => {
  return element === 0;
};

// Shortest Syntax
(element) => element === 0;

let myArray = [1, 2, 3, 0];

myArray.find(isNumberZero);

myArray.find((element) => element === 0); // Anonymous arrow function (out of scope anywhere else)

myArray.find((element) => element === 0); // Anonymous arrow function (out of scope anywhere else)

myArray.find((element) => 
{
  return element === 0;
}); // Anonymous arrow function (out of scope anywhere else)

myArray.find((element) => {
  return element === 0;
}); // Anonymous arrow function (out of scope anywhere else)

myArray.find(function (element) {
  return element === 0;
}); // Anonymous Standard function (out of scope anywhere else)

myArray.find(function namedForTesting(element) {
  return element === 0;
}); // Named (out of scope anywhere else)
