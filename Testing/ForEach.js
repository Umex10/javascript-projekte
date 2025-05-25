// forEach() = method used to iterate over the elements
//             of an array and apply specified function (callback)
//             to each element!

//             array.forEach(callback) --> built in function
//             element, index, array are provided!


//? 1. First example
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(display); //    forEach calls automatically display function with
//    with the current element in the array!

function display(element) {
  console.log(element);
}

//? 2. Second example

function double(element, index, array) {
  array[index] = element * 2;
}

function triple(element, index, array) {
  array[index] = element * 3;
}


console.log();
numbers.forEach(double);
numbers.forEach(display);

console.log();
numbers.forEach(triple);
numbers.forEach(display);


//? 3. Third example

let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array) {
    array[index] = element.toUpperCase();
}

function displayFruits(element) {
    console.log(element);
}