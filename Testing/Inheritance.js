// inheritance = allows a new class to inherit properties and methods
//               from an existing class (parent -> child)
//               helps with code reusability

class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating.`);
  }

  sleep() {
    console.log(`This ${this.name} is sleeping.`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";

  run() {
    console.log(`This ${this.name} is running.`);
  }
}

class Fish extends Animal {
  name = "Fish";
  swim() {
    console.log(`This ${this.name} is swimming.`);
  }
}

class Hawk extends Animal {
  name = "Hawk";
  fly() {
    console.log(`This ${this.name} is flying.`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();

//? SUPER KEYWORD

// super = keyword is used in classes to call the constructor or
//         access the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent

class Animal2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`The ${this.name} moves at a speed of ${speed}mph`);
  }
}

class Rabbit2 extends Animal2 {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`This ${this.name} can run`);
    super.move(this.runSpeed);
  }
}

class Fish2 extends Animal2 {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`This ${this.name} can swim`);
    super.move(this.swimSpeed);
  }
}

class Hawk2 extends Animal2 {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }

  fly() {
    console.log(`This ${this.name} can fly`);
    super.move(this.flySpeed);
  }
}

const rabbit2 = new Rabbit2("Bugs Bunny", 1, 25);
const fish2 = new Fish2("Nemo", 0.5, 10);
const hawk2 = new Hawk2("Russo", 2, 250);

console.log(rabbit2.name);

rabbit2.run();

//? GETTERS and SETTERS - EXAMPLE 1

console.log("-------------------------------");

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth; //._ is a name convetion for developers, to share that this should not be
      //   accessed directly! rect.width --> Getter (Possible!)
      //                      rect._width --> direct (Possible, but should be avoided)
      // So this._width actually saves the value, and this.width is the access!
      // If you would use this.width --> ENDLESS LOOP!
    } else {
      console.error("Width must be a positive number");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight; //._ is a name convetion for developers, to share that this should not be
      //   accessed directly! rect.width --> Getter (Possible!)
      //                      rect._width --> direct (Possible, but should be avoided)
      // So this._width actually saves the value, and this.width is the access!
      // If you would use this.width --> ENDLESS LOOP!
    } else {
      console.error("Height must be a positive number");
    }
  }

  get width() {
    return this._width.toFixed(1); //From now on returning this._width!
  }

  get height() {
    return this._height.toFixed(1);
  }

  get area() {
    return (this._width * this._height).toFixed(1);
  }
}

const rect = new Rectangle(3, 4);

rect.width = 5;
rect.height = 6;

console.log(rect.width);
console.log(rect.height);
console.log(rect.area);

console.log("-----------------------------------");

//? GETTERS and SETTERS - EXAMPLE 2

class Dude {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName == "string" && newFirstName.length > 0) {
      //typeof returns the datatype as string. so it could be "number" returned
      this._firstName = newFirstName;
    } else {
      console.error("First name must be a non-empty string");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName == "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name must be a non-empty string");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a non-negative number");
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get FullName() {
    return this._firstName + " " + this._lastName;
  }

  get age() {
    return this._age;
  }
}

const dude = new Dude("Thaddäus", "Square", 30);

console.log(dude.firstName);
console.log(dude.lastName);
console.log(dude.age);
