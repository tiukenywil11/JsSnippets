// Get objects from DOM
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailnput = document.querySelector('#email');
const msg = document.querySelector('#msg');
const userList = document.querySelector('#users');

// Create a listener that within id='my-form'
// Listens for a 'submit' event
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    // Gets full value on input text box with id='name'
    console.log(nameInput.value);

    // Error handling, if fields have no input
    if (nameInput.value === '' || emailImput.value === '') {
        //alert('Please enter fields');

        // Adds the style 'error' from style.css
        msg.classList.add('error');
        // Adds a text to tag with id='msg
        msg.innerHTML = 'Please enter fields';

        // removes warning message after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        //console.log('success');
        
        // Creates a list item
        const li = document.createElement('li');
        // Adds the list valie to the HTML file
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';

    }
}