// High order array methods

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];

// forEach method

// ES6 format
// todos.forEach((todo) => console.log(todo.text)); //list text arrays

console.log('Showing values after being iterated using forEach, getting only values of text from Object:'); 
todos.forEach(function(todo) {
    console.log(todo.text); //list text arrays
});

// map method, returns the same array, or changed array affecting all objects in the array
const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log('Showing values after being mapped, getting only values of text from Object:'); 
console.log(todoText); 

// filter method returns a filtered arrays
const todoCompleted = todos.filter(function(todo) {
    // returns a new array where the object variable isCompleted is true
    return todo.isCompleted === true;
});

console.log('Showing filtered values after using filter, getting only values where isCompleted is equals to true:'); 
console.log(todoCompleted);

// filter method, returns a filtered array so need to assign to a variable
const todoCompleted_mapped = todos.filter(function(todo) {
    // returns a new array where the object variable isCompleted is true
    return todo.isCompleted === true;
}).map(function(todo) {
    // Chaining map would only return text string array in todo
    return todo.text;
})

console.log('Showing filtered values after using filter, getting only values where isCompleted is equals to true, then being mapped to get only the values in text:'); 
console.log(todoCompleted_mapped);
