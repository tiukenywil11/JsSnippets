// DOM

// window object is the parent object of the browser
console.log(window);
// the same as window.alert(1);
alert(1);

// Declare on index.html script tag for these to work

// Selecting single elements
// Gets elements within tags with id='my-form'
console.log(document.getElementById('my-form'));

// querySelector only selects the first instance.
// Gets elements within tags with class='container'
console.log(document.querySelector('.container'));
// Gets elements with tag 'h1'
console.log(document.querySelector('h1'));


// Selecting multiple elements

// Returns values similar to array, array manipulation can be made here.
// Gets all elements within tags with class='item'
console.log(document.querySelectorAll('.item')); 

// Older ways to get elements
// These returns HTML collections, values cannot be manipulated like an array.
// Gets all elements by class name, no need for '.' before parameter name, because it would always be a class type.
console.log(document.getElementsByClassName('item'));
// Gets all elements by tag
console.log(document.getElementsByTagName('li'));


// Intantiate return into a variable for manipulation
const items = document.querySelectorAll('.item');
// Checks each item returned by querySelectorAll
items.forEach((item) => console.log(item));


// Manipulating the DOM
// Instantiate one line from index.html
const ul = document.querySelector('.items');

// Remove line with class items
ul.remove();
// Remove last line with class items
ul.lastElementChild.remove();
// Append 1st line with class 'items' with text 'Hello'
ul.firstElementChild.textContent = 'Hello';
// Append 2nd value of array with class 'items' to 'Brad'
ul.children[1].innerText = 'Brad';
// Append 3rd line with class 'items' with text 'Hello' with 'h1' tag
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// Get an element with class button, and change its background color to red.
const btn = document.querySelector('.btn');
btn.style.background = 'red';