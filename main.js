console.log('Hello');
console.error('Error');
console.warn('warm');

//var (deprecated), let, const

let age_test = 30;
age_test = 31;

console.log(age_test);

// String, Numbers, Boolean, null, undefined, Symbol (not common)

const name = 'John';
const age = 30;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
let z;

console.log(typeof name);

// String
// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String
const hello = `My name is ${name} and I am ${age}`
console.log(hello);

const s = 'Hello World';

//attribute
console.log(s.length); 

//function
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));

const s1 ='technology, computers, it, code';
console.log(s1.split(', '));

// Arrays

const fruits = ['apples', 'oranges', 'pears'];
//fruits = [] error

fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();

console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));
console.log(fruits);
console.log(fruits[1]);

// Object literal
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.hobbies[1]); //movies
console.log(person.address.city); //Boston

const{firstName, lastName} = person;
console.log(firstName);

const{firstName2, lastName2, address: {city}} = person;

//Add property
person.email='john@gmail.com';

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

console.log(todos[1].text);

// JSON

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// loops

for(let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`)
}

// while 
let j = 0;
while (j < 10) {
    console.log(`While Loop Number: ${j}`);
    j++;
}

for(let k = 0; k < todos.length; k++) {
    console.log(todos[k].text);
}

for(let todo of todos){
    console.log(todo.id);
}

// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text); //list text arrays
});

// todos.forEach((todo) => console.log(todo.text)); //list text arrays

const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText); //returns array of text

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted) //returns filtered array of text

// Conditional
const x0 = 10;

if(x0 == 10) {
    console.log('x is 10');
}

// triple equals matches even data type
if(x0 === 10) {
    console.log('x is 10');
} else if(x0 > 10) {
    console.log('x is greater than 10')
} else {
    console.log('x is less than 10');
} 

const x1 = 4;
const y1 = 10;

if (x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10');
}

const x2 = 10;
const color = x2 > 10 ? 'red' : 'blue'
console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

// function

function addNums(num1, num2) {
    return num1 + num2;
}

console.log(addNums(5,4));

const addNums_0 = (num1_0 = 1, num2_0 = 1) => num1_0 + num2_0;
console.log(addNums_0(5,5));

// constructor
function Person(firstName3, lastName3, dob) {
    this.firstName = firstName3;
    this.lastName = lastName3;
    this.dob = new Date(dob);
} 

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// ES6 OOP
class Person1 {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person1('John', 'Doe', '4-3-1980');
const person2 = new Person1('Mary', 'Smith', '3-6-1970');

console.log(person1.getBirthYear());
console.log(person2.getFullName());


// DOM

console.log(window);
window.alert(1);

// Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

// Multiple element
console.log(document.querySelectorAll('.item')); // can use array methods on
console.log(document.getElementsByClassName('item')); // HTML collection
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Event listeners

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML='<h1>Hello</h1>'
});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailnput = document.querySelector('#email');
const msg = document.querySelector('#msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    console.log(nameInput.value);

    if (nameInput.value === '' || emailImput.value === '') {
        //alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        //console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';

    }
}