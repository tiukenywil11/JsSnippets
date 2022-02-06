console.log('Hello');
console.error('Error');
console.warn('warm');

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