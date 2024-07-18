// Arrays in javascript
function print(arr) {
  for (i of arr) {
    console.log(i);
  }
}

const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers[4]);
numbers.push(6);
// print(numbers);
numbers.pop();
// print(numbers);
numbers.shift();
// print(numbers);
numbers.unshift(100);
// print(numbers);

const updatedNumber = numbers.map(function (value) {
  return value * 2;
});
// print(updatedNumber);
const evenNumbers = numbers.filter(function (val) {
  if (val % 2 == 0) return val;
});
// print(evenNumbers);
const number = [1, 2, 3, 4, 5];

const product = number.reduce(function (a, b) {
  return a + b;
}, 0);
console.log(product);

numbers.forEach((value) => {
  console.log(value);
});

for (i = 0; i <= numbers.length; i++) {
  console.log(numbers[i]);
}

const matrix = [
  [1, 2, 3],
  [2, 3, 4],
];
for (i = 0; i < 3; i++) {
  for (j = 0; j < 3; j++) {
    console.log(matrix[i][j]);
  }
}
console.log(matrix[1][2], matrix[0][1]);
