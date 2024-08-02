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

//Activity-1
//Task-1

//Activity-1
//Task-1
