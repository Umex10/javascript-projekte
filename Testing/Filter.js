// .filter() = creates a new array by filtering out elements
// filter() is based on boolean, 


//? 1. First Example
let numbers = [1, 2, 3, 4, 5, 6, 7]; 

let evenNumbers = numbers.filter(function(element) {
    return element % 2 === 0;
});

let oddNumbers = numbers.filter((element) => {
    return element % 2 !== 0;
});

console.log(evenNumbers);
console.log(oddNumbers);


//? 2. Second Example

const ages = [16, 17, 18, 18, 19, 20, 60];

let isAdult = ages.filter((element) => {
    return element >= 18;
});

console.log(isAdult);


//? 3. Third Example

const words = ["apple", "orange", "banana", "kiwi", "coconut"];

const getShortWords = words.filter((element) => {
    return element.length <= 6;
})

console.log(getShortWords);

