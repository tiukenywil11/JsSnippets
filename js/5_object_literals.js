// Object literal

// Initialize
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

console.log (person);

// This would show 'John'
console.log (person.firstName);

// This would show 'John Doe'
console.log (person.firstName,person.lastName);

// This would show 'movies'
console.log(person.hobbies[1])

// This would show 'Boston'
console.log(person.address.city); 

// Destructure, pulling firstname 
const{firstName, lastName, address: {city}} = person;
console.log(firstName); // This would call 'John'
console.log(city); // This would call 'Boston

// Adding properties
person.email = 'john@gmail.com';
console.log(person);