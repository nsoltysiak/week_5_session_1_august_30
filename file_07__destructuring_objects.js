/* Destructuring allows you to unpack values from arrays 
   and properties from objects into distinct variables.
   Will use a lot in React
*/

let myObject = 
{
    city: "Las Vegas",
    state: "Nevada",
    zip: 89111
}

let {city, state, zip} = myObject; // Association is the property names
console.log(city);
console.log(state);
console.log(zip);

// Lines 13-16 are equivalent to
let city2 = myObject.city;
let state2 = myObject.state;
let zip2 = myObject.zip;