// Event listeners

// Get button that would be clicked
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    // Prevent the default behavior of btn, which is 'submit'
    e.preventDefault();
    console.log(e);

    // Get the actual element, which is the button
    console.log(e.target);

    // returns nothing, because there is no id in the button selected
    console.log(e.target.id);

    // Change background color of id=my-form
    document.querySelector('#my-form').style.background = '#ccc';

    // Apply the css style (found in style.css) to the body tag
    document.querySelector('body').classList.add('bg-dark');

    // Changes first value of 'items' to 'Hello' with tag 'h1'
    document.querySelector('.items')
    .lastElementChild.innerHTML='<h1>Hello</h1>'
});


