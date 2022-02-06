// Array of objects
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

console.log(todos);

// Shows 'Meeting with Boss' 
console.log(todos[1].text);

// Change object into JSON format
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
