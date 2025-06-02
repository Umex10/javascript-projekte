// function decleration = define a reusable block of code
//                        that performs a specific task

// function expressions = a way to define functions as
//                        values or variables

//Store

//Store function in variable

const hello = function () {
  console.log("Hello");
};

hello();

//? 1. First Example

//setTimeout
//1. Method
setTimeout(hello, 3000);

//2. Method --> anonymous function
setTimeout(function () {
  console.log("Whats up");
}, 3000);



//? 2. Second Example

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

console.log(squares);

//? 3. Third Example

const evenNumbers = numbers.filter(function(element) {
    return element % 2 === 0;
})

console.log(evenNumbers);

//? 4. Forth Example
const total = numbers.reduce(function(accumulator, element) {
    return accumulator + element;
})

console.log(total);