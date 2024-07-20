// ES6 in javascript
let name = "Haider";
let age = 20;
console.log(`Name is ${name} and age is ${age}`);

console.log(`My Name is Haider 
    what about you`);
const [first, second] = [1, 3];
console.log(first, second);
const book = {
  title: "Learn Javascript",
  author: "Haider Ali",
};
const { title, author } = book;
console.log(title, author);
const numbers = [10, 20, 30];
const updatedNumers = [...numbers, 40, 50];
console.log(updatedNumers);

function sum(...number) {
  let sum = 0;
  for (i of number) {
    sum += i;
  }
  console.log(sum);
}
sum(1, 2, 4, 5, 6);

function multiple(a, b = 1) {
  return a * b;
}
console.log(multiple(10, 2));
console.log(multiple(10));

const myObject = {
  name: "My Object",

  sayHello() {
    console.log(`Hello, I am ${this.name}!`);
  },

  sayGoodbye() {
    console.log(`Goodbye, I am ${this.name}!`);
  },
};

console.log(myObject);

myObject.sayHello();
myObject.sayGoodbye();

let prefix = "user";
let suffix = "Info";

let userName = "John Doe";
let userAge = 30;
let userOccupation = "Software Engineer";

let myObject1 = {
  [`${prefix}Name`]: userName,
  [`${prefix}Age`]: userAge,
  [`${prefix}${suffix}`]: {
    occupation: userOccupation,
    location: "New York",
  },
};

console.log(myObject1);
