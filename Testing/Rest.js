//We already now the Spreading and what it is doing. The =rest paramter will to the opposite

// rest = bundle seperate elements into an array

//...something is a variable number of arguments passed to the function

//... This functions accepts any number of arguments!
function fridge(...foods) {
  console.log(foods);
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "dog";
const food4 = "sushi";

fridge(food1, food2, food3, food4);

//You can easily use it with numbers and calculate methods

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }

  return result;
}

const total = sum(1, 2, 3, 4, 5, 6, 7);

console.log(`Your total is ${total}`);

// Let's calculate the average now...

function avg(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }

  return result / numbers.length;
}

const totalAvg = avg(75, 100, 85, 90, 50);

console.log(`Your average is ${totalAvg}`);


//combining Strings

function combineStrings(...strings) {

    return strings.join(" ");

}

const name = combineStrings("Mr.", "DeMarcus The third", "Thaddäus");


console.log(name);

