/* Destructuring allows you to unpack values from arrays 
   and properties from objects into distinct variables.
   Will use a lot in React
*/

function getPerson()
{
    return ["John", 37];
}

console.log(getPerson());

const person = getPerson();
const name = person[0];
const age = person[1];
console.log(person);
console.log(name);
console.log(age);

const [firstName, myAge] = getPerson(); // this is shorthand for lines 13-15
console.log(firstName);
console.log(myAge);
