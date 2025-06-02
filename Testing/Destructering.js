// destructering = extract values from arrays and objects, 
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructering
//                 {} = to perform object destructering
//                 5 examples

//? ----------- Example 1 ------------
/// SWAP THE VALUE OF VARIABLES


let a = 1;
let b = 2;

[a,b] = [b, a]; 

console.log(a); console.log(b);

//? ----------- Example 2 ------------
/// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//? ----------- Example 3 ------------
/// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors2 = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors2;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors); //This array has the remaining colors! Rest Parameter

//? ----------- Example 4 ------------
/// EXTRACT VALUES FROM OBJECTS

const dude1 = {
    firstName: "Thaddäus",
    lastName: "Square",
    age: 30,
    job: "Service"
}

const dude2 = {
    firstName: "Sandy",
    lastName: "Cheeks",
    age: 16
}

const {firstName2, lastName2, age2, job2="Unemployed"} = dude1; //Default value

console.log(firstName);


//? ----------- Example 5 ------------
/// DESTRUCTURE IN FUNCTION PARAMETERS

function displayDude({firstName, lastName, age, job="Unemployed"}) {

    console.log(`Name: ${firstName} ${lastName} \nage: ${age} job: ${job}`);

}

displayDude(dude2);