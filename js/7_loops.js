// Loops

// 'for' loop
for(let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`)
}

// 'while' loop
let j = 0;
while (j < 10) {
    console.log(`While Loop Number: ${j}`);
    j++;
}

// loop in an array
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

// 'for' loop an array
console.log('For loop an array');

for(let k = 0; k < todos.length; k++) {
    console.log(todos[k].text);
}

// 'for of' loop an array
console.log('For-of loop an array');

for(let todo of todos){
    // Shows whole todo object
    console.log(todo);

    // Shows only text of todo object
    console.log(todo.text);

    // Shows only id of todo object
    console.log(todo.id);
}