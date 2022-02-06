// Conditional
const x_if = '10';

// 'if' statement
// This will show, because double equals only match value
if(x_if == 10) {
    console.log('x is 10');
}

// This will not show, because tripple equal matches data types too
if(x_if === 10) {
    console.log('x is 10');
}

// 'else' statment
x_else = 10

if(x_else === 10) {
    console.log('x is 10');
} else {
    console.log('x is NOT 10');
} 

// 'else if' statement
x_else_if = 10

if(x_else_if === 10) {
    console.log('x is 10');
} else if(x_else_if > 10) {
    console.log('x is greater than 10')
} else {
    console.log('x is less than 10');
} 

// multiple conditions (OR)
const x_or = 4;
const y_or = 11;

// one condition is true ( y greater than 10)
if (x_or > 5 || y_or > 10) {
    console.log('x is more than 5 or y is more than 10');
}

// multiple conditions (AND)
const x_and = 6;
const y_and = 11;

// both conditions are true ( x greater than 5, and y greater than 10)
if (x_and > 5 && y_and > 10) {
    console.log('x is more than 5 and y is more than 10');
}

// Ternary operator
const x_ternary = 11;

// if x is greater than than 10 then color would be red, else it would be blue
const color = x_ternary > 10 ? 'red' : 'blue'
// The value 'Red' will be shown, because x is greater than 10
console.log(color);

// 'switch' statment
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
