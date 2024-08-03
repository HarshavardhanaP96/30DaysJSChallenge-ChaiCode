//Activity-1
//Task-1

function calculate(x) {
  function multipy(y) {
    return x * y;
  }
  return multipy;
}

const multiply3 = calculate(3);

console.log(multiply3(4));

//Task-2
function countOut() {
  let _count = 0;

  function countup(val) {
    return (_count += val);
  }

  //   function getcount() {
  //     return _count;
  //   }

  return {
    increment() {
      countup(1);
      return _count;
    },
  };
}

const count = countOut();

console.log(count.increment());
console.log(count.increment());

//Activity-2
//Task-3
function createUniqueId() {
  let lastId = 0;
  function uniqueId() {
    return (lastId += 1);
  }
  return uniqueId;
}

const generateId = createUniqueId();
console.log(generateId());
console.log(generateId());

//Task-4
function outgreet() {
  return function greet(fullName) {
    return `Welcome ${fullName}!`;
  };
}

const greeting = outgreet();
console.log(greeting("Lakshmi"));

//Activity-3
//Task-5

function closureLoop() {
  const functionArray = [];
  for (let i = 0; i < 5; i++) {
    functionArray.push(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(i)
    );
  }
  return functionArray;
}

const functions = closureLoop();
functions[0]();

//Activity-4
//Task-6
function moduleClosure() {
  let items = [];

  function additem(item) {
    items.push(item);
    console.log("Added ", item);
  }
  function removeitem(item) {
    const index = items.indexOf(item);
    if (index > -1) {
      items.splice(index, 1);
      console.log("Removed ", item);
    } else {
      console.log("item not found");
    }
  }
  function listItems() {
    if (items.length === 0) {
      console.log("no items to display");
    } else {
      console.log("Items are:");
      items.forEach((element) => {
        console.log(element);
      });
    }
  }
  return { add: additem, remove: removeitem, list: listItems };
}

const modules = moduleClosure();

modules.add("item1");
modules.add("item2");
modules.list();

modules.remove("item1");

//Activity-5
//Task-7

function closureMemo(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    console.log(key);

    if (cache[key]) {
      console.log("cached result", cache[key]);
      return cache[key];
    }

    console.log("computed result");
    const result = fn(...args);
    cache[key] = result;

    return result;
  };
}

function slowComputation(num) {
  let sum = 0;
  for (let index = 0; index < num; index++) {
    sum += index;
  }
  return sum;
}

const memoization = closureMemo(slowComputation);
console.log(memoization(10000));
console.log(memoization(10000));

//Task-8

function memoFactorial() {
  const cache = {};

  return function Factorial(num) {
    if (num == 1) {
      return 1;
    }
    if (cache[num]) {
      console.log("cached value", cache[num]);
      return cache[num];
    }
    const result = num * Factorial(num - 1);
    console.log("computing Factorial ", result);

    cache[num] = result;
    return result;
  };
}
const fact = memoFactorial();
console.log(fact(10));
console.log(fact(6));
