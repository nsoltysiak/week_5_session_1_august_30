// Array methods are functions associated with the array data type

const fruits = ["banana", "kiwi", "cherry", "apple", "strawberry"];

// fruits is an array and an object and has functions/methods we can use
// for any method, what are the inputs (sometimes many different ways to call a method)
// Could take in 1 parameter or more

// push (adds item to end of array)
console.log(fruits.push("grape")); // What does this return?  returns length
console.log(fruits);

// pop (remove last item in array)
console.log(fruits.pop());
console.log(fruits);

//unshift (adds item to beginning of array)
fruits.unshift("grape");
console.log(fruits);

//shift (removes first item in array)
fruits.shift();
console.log(fruits);

// find, includes, map, filter, reduce, some, every, splice, slice are functions you'll use a lot

// filter (higher order function)
function moreThanSixCharacters(str)
{
    if (str.length > 6)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(fruits.filter(moreThanSixCharacters));


// Arrow function
console.log(fruits.filter(str => str.length > 6));

// map
console.log(fruits.map(x => x+"!"));

// reduce (retrieve total from all items in number array; change structure of each item in array)