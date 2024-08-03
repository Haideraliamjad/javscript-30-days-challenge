function getFactorial(value) {
  if (value <= 1) {
    return value;
  }
  let ans = value * getFactorial(value - 1);
  return ans;
}
console.log(getFactorial(3));

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log(fibonacci(20));

function getSum(data, index = 0) {
  if (index >= data.length) {
    return 0;
  }
  let sum = data[index] + getSum(data, index + 1);
  return sum;
}
console.log(getSum([10, 20]));

function findMax(data, index = 0, max = -Infinity) {
  if (index >= data.length) {
    return max;
  }
  if (data[index] > max) {
    max = data[index];
  }
  return findMax(data, index + 1, max);
}

console.log(findMax([10, 20, 30, 1000, 50]));
