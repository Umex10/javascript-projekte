//spread

/* The spread "..." will seperate the array into multiple elements, which are then
   passed to the max/min method of Math

*/

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

// You can do it also with strings

let username = "Bro Code";
let letters = [...username];

console.log(letters);

//You could join the letters back to a whole string!

console.log(letters.join("-"));
console.log();

//copy array

let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits];

console.log(fruits);
console.log(newFruits);

//one array contains every element from two arrays

let vegetables = ["carrots", "celery", "tomato"];

let foods = [...fruits, ...vegetables];

console.log(foods);
