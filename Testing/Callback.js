//callback --> a function is passed as an argument to another function.

//          Used to handle asynchronous operations:
//          1. reading a file
//          2. network requets
//          3. interacting with databases

//          Hey, when you are done, "call" this next!

//It doesn't matter which function you pass to the hello function as a paramter,
//The hello function will always be executed first.
//You tell javascript: Wait until hello is executed

hello(goodbye);

function hello(callback) {
  console.log("Hello!");
  callback();
}

function wait() {
  console.log("wait!");
}

function leave() {
  console.log("Leave!");
}

function goodbye() {
  console.log("Goodbye!");
}

//? 2. Example

sum(displayConsole, 5, 5);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

//? 3. Example with html

sum(displayPage, 5, 5);

function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}
