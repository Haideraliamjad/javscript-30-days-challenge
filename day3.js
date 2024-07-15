// Task 1
let number = 10;
if (number > 0) {
  console.log(`${number} is postivie`);
} else if (number === 0) {
  console.log(`${number} is zero`);
} else {
  console.log(`${number} is negative`);
}
// Task 2
let age = 18;
if (age >= 18) console.log("Leagal to vote");
else console.log("Not legal to vote");
// Task 4
let day = 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid");
}

let num = 2;
num % 2 == 0 ? console.log("Even") : console.log("Odd");

let year = 2001;
if ((year % 2 === 0 && year % 1000 != 0) || year % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}

function getGrade(score) {
  switch (true) {
    case score >= 90:
      return "A";
    case score >= 80:
      return "B";
    case score >= 70:
      return "C";
    case score >= 60:
      return "D";
    default:
      return "F";
  }
}

console.log(`Grade for score 95: ${getGrade(95)}`); // A
console.log(`Grade for score 75: ${getGrade(75)}`); // C
console.log(`Grade for score 40: ${getGrade(40)}`); // F

function findLargest(a, b, c) {
  if (a >= b) {
    if (a >= c) {
      return a;
    } else {
      return c;
    }
  } else {
    if (b >= c) {
      return b;
    } else {
      return c;
    }
  }
}

// test the function with different values
console.log(`Largest of 10, 20, 30: ${findLargest(10, 20, 30)}`); // 30
console.log(`Largest of 50, 30, 20: ${findLargest(50, 30, 20)}`); // 50
console.log(`Largest of 10, 10, 10: ${findLargest(10, 10, 10)}`); // 10
