// object = A collection of related properties and/or methods 
//          Can represent real world objects (people, producs, places)
//          object = {key: value, 
//                    function()}

const dude = {
    firstName: "Thaddäus",
    lastName: "Maggus",
    age: 30, 
    isEmployed: true,
    sayHello: function(){console.log("Hi!")}
}

const dude2 = {
    firstName: "Patrick",
    lastName: "leggo",
    age: 25, 
    isEmployed: false,
    sayHello: () => console.log("Hey hier ist Patrick")
}

console.log(dude.firstName);
console.log(dude2.isEmployed);

dude.sayHello();
dude2.sayHello();

//? THIS

// this = reference to the object where THIS is used 
//        (the object depends on the immediate context)
//        dude.name = this.name;

const AnotherDude = {
    name: "Thaddäus",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hello! I am ${this.name}`)},
    eat: () => {console.log(`${this.name} is eating ${this.favFood}`)} //! this is Undefined! ...when using arrow functions!
}

AnotherDude.sayHello();
AnotherDude.eat();

//if this stands alone for itself without any objects implemented,
//it will return the window (object) of the html website. 

console.log(this); //Since we are working with Node, we will get an empty array back!

