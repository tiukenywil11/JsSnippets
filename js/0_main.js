console.log('Hello');
console.error('Error');
console.warn('warm');

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