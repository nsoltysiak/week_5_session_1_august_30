// ============================================
// OBJECT METHODS PRACTICE - BEGINNER LEVEL
// ============================================

// Starting data
const student = {
    name: 'Alex',
    age: 20,
    major: 'Computer Science',
    gpa: 3.5
};

const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'blue'
};

// ============================================
// PART 1: Getting Object Information
// ============================================

// TODO: Use Object.keys() to get all the property names from the student object
// Store the result in a variable called 'studentProperties'
// Write your code here:
const student_keys = Object.keys(student);
console.log(student_keys);

const student_values = Object.values(student);
console.log(student_values);

// TODO: Use Object.values() to get all the values from the car object
// Store the result in a variable called 'carValues'
// Write your code here:
const car_keys = Object.keys(car);
const car_values = Object.values(car);
console.log(car_keys);
console.log(car_values);


// Test (uncomment to see results):
// console.log('Student properties:', studentProperties);
// console.log('Car values:', carValues);


// ============================================
// PART 2: Adding and Modifying Properties
// ============================================

// TODO: Add a new property 'email' to the student object with value 'alex@school.edu'
// Write your code here:
student.email = 'alex@school.edu';

// TODO: Change the car's color from 'blue' to 'red'
// Write your code here:
car.color = 'red';

// TODO: Add a new property 'mileage' to the car object with value 15000
// Write your code here:
car.mileage = 15000;

// Test (uncomment to see results):
console.log('Updated student:', student);
console.log('Updated car:', car);


// ============================================
// PART 3: Checking Properties
// ============================================

// TODO: Use hasOwnProperty() to check if student has a 'name' property
// Store the result in a variable called 'hasName'
// Write your code here:
let hasName = student.hasOwnProperty.name;

// TODO: Use the 'in' operator to check if 'price' exists in the car object
// Store the result in a variable called 'hasPrice'
// Write your code here:
let hasPrice = 'price' in car;

// Test (uncomment to see results):
console.log('Student has name property:', hasName);
console.log('Car has price property:', hasPrice);


// ============================================
// PART 4: Object Entries
// ============================================

// TODO: Use Object.entries() to get key-value pairs from the student object
// Store the result in a variable called 'studentEntries'
// Write your code here:


// Test (uncomment to see results):
// console.log('Student entries:', studentEntries);


// ============================================
// PART 5: Creating Objects from Arrays
// ============================================

const keys = ['title', 'author', 'pages'];
const values = ['The Great Gatsby', 'F. Scott Fitzgerald', 180];

// TODO: Use Object.fromEntries() with zip-like functionality to create a book object
// Hint: You'll need to combine keys and values into pairs first
// Store the result in a variable called 'book'
// Write your code here:
const book = {};
for (let i = 0; i < keys.length; i++)
{
    book[keys[i]] = values[i];
}

const book_entries = Object.entries(book);
// Test (uncomment to see results):
console.log(book);
console.log('Created book object:', book);

console.log(book_entries);

// ============================================
// BONUS CHALLENGE
// ============================================

// TODO: Create a person object with at least 4 properties
// Then use Object.keys(), Object.values(), and Object.entries() on it
// Log all three results

// Write your bonus code here:


// Notes for beginners:
// - Object.keys() returns an array of property names
// - Object.values() returns an array of property values  
// - Object.entries() returns an array of [key, value] pairs
// - hasOwnProperty() checks if an object has a specific property
// - 'in' operator also checks for property existence
// - You can add properties with dot notation (obj.prop = value)
// - You can modify properties the same way