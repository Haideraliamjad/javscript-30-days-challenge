// Cloures in javascript
function getMarks() {
  const marks = 20;
  return function () {
    return marks;
  };
}
console.log(getMarks()());

const counter = (() => {
  let privateCounter = 0;

  return {
    increment: () => {
      privateCounter++;
    },
    getValue: () => {
      return privateCounter;
    },
  };
})();

console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());

// Task 2
const uniqueIdGenerator = (() => {
  let lastId = 0;

  return () => {
    lastId++;
    return `id-${lastId}`;
  };
})();

console.log(uniqueIdGenerator());
console.log(uniqueIdGenerator());
console.log(uniqueIdGenerator());

const greet = ((name) => {
  let userName = name;
  return () => {
    console.log(`Greetings from ${userName}`);
  };
})("Haider Ali");
greet();

// Task 3
const func = [];
for (let i = 0; i < 5; i++) {
  func.push(
    ((index) => {
      return () => {
        console.log(index);
      };
    })(i)
  );
}

func[0]();
func[1]();
func[2]();
func[3]();
func[4]();

// Activity 4
const manageCollection = (() => {
  items = [];
  return {
    add: (data) => {
      items.push(data);
    },
    get: () => {
      return items;
    },
  };
})();

manageCollection.add({ name: "Haider" });
manageCollection.add({ name: "Muzammil" });
console.log(manageCollection.get());

// Activity 5
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(4, 5));
console.log(memoizedAdd(4, 5));
