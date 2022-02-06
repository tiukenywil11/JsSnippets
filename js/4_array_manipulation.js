// Arrays - variables that hold multiple values

// Initialization
const numbers = new Array(1,2,3,4,5);

console.log(numbers);

// New initialization

const fruits = ['apples', 'oranges', 'pears'];

console.log(fruits);

// This would call oranges
console.log(fruits[1]);

// Can add to an array
// fruits = []; would cause error if const
fruits[3] = 'grapes';

// Adds to the end of the array
fruits.push('mangos');

// Adds to the beginning of the array
fruits.unshift('strawberries');

// Remove the last object in array (mangoes)
fruits.pop();

// Checks if an array
console.log(Array.isArray(fruits));

// Finds the index of object in array, 
// This would show 2 because strawberries are added to 0
console.log(fruits.indexOf('oranges'));
