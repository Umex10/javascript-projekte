// nested objects = Objects inside other Objects
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by a Parent Object

//                  dude{Address{}, ContactInfo{}, 
//                  Shoppingcart{Keyboard{}, Mouse{}}}

//? FIRST EXAMPLE

const dude = {
    fullName: "Vin Diesel",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. water"
    }
}


// .property doesn't work here because JavaScript treats it as a literal key named "property".
// To use a dynamic key stored in a variable, you need to use bracket notation: object[property].

for(const property in dude.address) {
    console.log(dude.address[property]);                                     
}

//? SECOND EXAMPLE


class Human {
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address); //Spreading
    }
}

class Address {
    constructor(street, city, country){

        this.street = street;
        this.city = city;
        this.country = country;

    }
}

const h1 = new Human("Thaddäus", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");

const h2 = new Human("Patrick", 19, "124 Conch St.", "Bikini Bottom", "Int. Waters");

console.log("---------------------------------");

console.log(h2);