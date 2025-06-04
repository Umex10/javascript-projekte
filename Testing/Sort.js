// sort() = method used to sort elements of an array in place.
//          sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6]; 

//? FIRST EXAMPLE

fruits.sort();
//sort() is comparing the elements as strings, therefore numbers will not be sorted correct

numbers.sort((a,b) => a - b); //sort method is using same logic as java for comparing two elements
numbers.sort((a,b) => b - a); //Reverse order!

console.log("-------fruits-------")
console.log(fruits);
console.log("-------numbers-------")
console.log(numbers);

//? SECOND EXAMPLE

const people = [{name: "Thaddäus", age: 39, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "bob", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}
];

people.sort((a, b) => a.age - b.age);

console.log(people);

people.sort((a, b) => a.name - b.name); //Will not sort correct, there is an other formula for strings inside objects
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);




