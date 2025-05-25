// .reduce() = reduce the elements of an array to a single value

const money = [5, 30, 10, 25, 15, 20];

const total = money.reduce(sum);

console.log(`$${total.toFixed(2)}`);

//JavaScript sets the accumulator automatically
//     accumulator will always be the first element, 
//     so "element" itself will be the element
//     on index 1

function sum(accumulator, element) {
    return accumulator + element; //--> new accumulator
}

//? 2. Second Example

const grades = [75, 50, 90, 80, 65, 95];

const max = grades.reduce(getMax);

const min = grades.reduce(getMin);

console.log(`The best grade is: ${max} \nThe baddest grade is: ${min}`);

function getMax(accumulator, element) {
    return Math.max(accumulator, element); //--> new accumulator
}

function getMin(accumulator, element) {
    return Math.min(accumulator, element); //--> new accumulator
}