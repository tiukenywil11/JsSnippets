// ES5 Constructor function 
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    //Change to Date object
    this.dob = new Date(dob); 
    // Adding a method for Person constructor
    /*this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return '{$this.firstName} ${this.lastName}';
    }*/
} 

//This serves the same purpose as line 8
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

//This serves the same purpose as line 11
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate an object
const person1 = new Person('John', 'Doe', '4-3-1980');
console.log(person1);

// Can instantiate multiple objects
const person2 = new Person('Mary', 'Smith', '3-6-1970');
// Shows date of birth of person2
console.log(person2.dob); 
//getFullYear is a method from JS prototype, returns year
console.log(person2.dob.getFullYear());
//getFullName is a method programmed by us either on lines 11 and 22
console.log(person2.getFullName());