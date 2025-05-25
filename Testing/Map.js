// .map() = accepts a callback and applies that function to each element
//          of an array, then return a new array

//? 1. First example
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square); //new array
const cubes = numbers.map(cube);

console.log(numbers); //unmodified
console.log(squares);
console.log(cubes);

function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}

//? 2. Second example

const students = ["Squarepants", "Patrick", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(students);
console.log(studentsUpper);
console.log(studentsLower);

function upperCase(element) {
  return element.toUpperCase();
}

function lowerCase(element) {
  return element.toLowerCase();
}

//? 3. Third Example --> Rearrange the date into a new date format

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];

const datesNew = dates.map(formatDates);

console.log(datesNew);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
