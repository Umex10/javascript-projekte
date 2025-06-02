// class = (ES6 feature) provides a more structured and cleaner way
//         to work with objects compared to traditional constructor
//         functions ex. static keyword, encapsulation, inheritance

class Product {
  constructor(name, price) {
    (this.name = name), (this.price = price);
  }

  displayProduct() {
    // Inside the class you don't need to use the function keyword
    console.log(`Product: ${this.name}`);
    console.log(`Price $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return (this.price + this.price * salesTax).toFixed(2);
  }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.5);

product1.displayProduct();
product2.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): ${total}`);

//? STATIC - Example 1

// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          from that class (class owns anything static, not the objects)

class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }

  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI); //!Access via class itself
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

//? STATIC - Example 2

console.log("----------------------------------");

class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`There are ${User.userCount} users online!`);
  }

  sayHello() {
    console.log(`Hello, my username is ${this.username}`);
  }
}

const user1 = new User("Patrick");
const user2 = new User("Thaddäus");

user1.sayHello();
User.getUserCount();
