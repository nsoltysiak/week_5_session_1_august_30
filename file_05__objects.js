// Objects are a way to tie two different things together
// Mix and match data types in an organized way
// Represent a tangible or intangible thing
// Couples actions and the data around those actions
// Uses methods/properties

// Car Object
// Methods > actions we perform on objects (ex:  accelerate, turn, stop)
// Properties > attribute about the object (ex: color, size, tire size, year, make, model)

// Create object using curly braces
const myCar = {};  // one way to create an object

myCar.year = 2010;
myCar.make = "Honda";
myCar.model = "Civic";


console.log(myCar);

// Initalize object with all properties at once
const otherCar = 
{
    year: 2020,
    make: "Ford",
    model: "F150",
    "has space": "value of has space",
    tires:
    {
        size: "20in",
        color: "black"
    }
}

console.log(otherCar);

// Access properties using dot and bracket notation (better to use dot notation when possible)
console.log(otherCar.year); // 2020
console.log(otherCar["has space"]); // value of has space

// Delete properties
delete otherCar["has space"]; // "has space" removed
delete otherCar.make; // make removed
console.log(otherCar);

// Nested properties (parent object > child object/property > property)
console.log(otherCar.tires.size); // 20in


// for in loops
// loop over objects using key value pairs

for (const key in otherCar)
{
    console.log("key: ", key);

    // Access the values
    console.log("value: ", otherCar[key]);


    // hasOwnProperty
    // We can check if an object has a property
    // Best to use for error checking
    console.log(otherCar.hasOwnProperty("model"));
}


// Functions
const smartBankAccount =
{
    accountNumber: "12345-67890",
    owner: "Sarah Johnson",
    balance: 1250.75,

    // Methods
    print: function()
    {
        console.log(`${this.accountNumber}, ${this.owner}, ${this.balance}`);
    }
};

smartBankAccount.print();

// this refers to the property within the specific object


// object methods

const user = 
{
    name: "Alex Thompson",
    email: "alex@email.com",
    age: 28,
    skills: ["JavaScript", "React", "Node.js"]
};

const keys = Object.keys(user);
console.log(keys);

const values = Object.values(user);
console.log(values);

const entries = Object.entries(user);
console.log(entries);


// Create a car object that is reusable
// Constructor

function Car(make, model, year, color)
{
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    this.start = function()
    {
        console.log(`You started your ${this.model}`);
    }
}

const honda = new Car("Honda", "Civic", 2013, "Brown");
const ford = new Car("Ford", "Mustang", 2010, "Red");

console.log(honda);
console.log(ford);

let cars = [honda, ford];

for (const car of cars) {
    car.start();
}