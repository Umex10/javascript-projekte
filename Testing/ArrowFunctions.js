// arrow functions = a concise way to write function expressions 
//                   good for simple functions that you use only once
//                   (parameters) => some code

//? 1. First Example

const hello = (name) => console.log(`Hello ${name}`);

hello("Umejr");

//to seperate more lines in an arrow function, you need to put the statement in curly brackets

const helloLong = (name, age) => {console.log(`Hello ${name}`);
                             console.log(`You are ${age} years old`)};

helloLong("Umejr", 25);

//? 2. Second Example

setTimeout(() => console.log("hello"), 3000);

//? 3. Third Example

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));

console.log(squares);

//? 4. Forth Example

const evenNumbers = numbers.filter((element) => element % 2 === 0);

console.log(evenNumbers);

//? 5. Fifth Example

const total = numbers.reduce((accumulator, element) => accumulator + element)

console.log(total);