const fruits = [{name: "apple", color:"red", calories: 95},
                {name: "orange", color:"orange", calories: 45},
                {name: "banana", color:"yellow", calories: 105},
                {name: "coconut", color:"white", calories: 159}, 
                {name: "pineapple", color:"yellow", calories: 37}];



//? FIRST EXAMPLE

console.log(fruits[0].name);

fruits.push({name: "grapes", color: "green", calories:62}); //adds element to the end

fruits.splice(5, 1); //deletes element on a given index

console.log(fruits);

//? SECOND EXAMPLE (Reps)

// ---------- forEach() ----------

console.log("---------- forEach() ----------")

fruits.forEach(fruit => console.log(fruit));

// ---------- map() ----------

console.log("---------- map() ----------")
const fruitNames = fruits.map(fruit => fruit.name); // new array
const fruitColors = fruits.map(fruit => fruit.color);

console.log(fruitNames); console.log(fruitColors);

// ---------- filter() ----------

console.log("---------- filter() ----------")

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalories = fruits.filter(fruit => fruit.calories < 100);

console.log(yellowFruits); console.log(lowCalories);

// ---------- reduce() ----------

console.log("---------- reduce() ----------")

const maxFruit = fruits.reduce((max, nextFruit) => 
                                nextFruit.calories > max.calories ? nextFruit : max);

const minFruit = fruits.reduce((min, nextFruit) => 
                                nextFruit.calories < min.calories ? nextFruit : min);

console.log(maxFruit); console.log(minFruit);