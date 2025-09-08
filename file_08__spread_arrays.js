// Arrays
const fruits = ["apple", "banana"];
const vegetables = ["carrot", "broccoli"];
const proteins = ["chicken", "tofu"];

let groceryList = [];

// creates array of arrays
// groceryList.push(fruits);
// console.log(groceryList);

// But we want a flat list of arrays
groceryList = [...fruits, ...vegetables, ...proteins];

console.log(groceryList);