// Loops in javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
let tableOf = 5;
for (let i = 1; i <= 5; i++) {
  console.log(`${tableOf} x ${i} = ${tableOf * i}`);
}
let number = 1;
let sum = 0;
while (number <= 10) {
  sum += number;
  number++;
}
console.log(`sum of numbers of 1 to 10 is ${sum}`);
let num = 10;
while (num >= 1) {
  console.log(num);
  num--;
}
let doNumber = 1;
do {
  console.log(doNumber);
  doNumber++;
} while (doNumber <= 5);

// calculate factorial of a number
let fact = 8;
let i = 1;
let ans = 1;
do {
  ans *= i;
  i++;
} while (i <= fact);
console.log(ans);

// priting pattren
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
