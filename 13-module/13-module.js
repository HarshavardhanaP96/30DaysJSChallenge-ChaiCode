//Activity-1
//task-1

function sumOfTwo(a, b) {
  return a + b;
}

//task-2
const person = {
  name: "Ram",
  age: 18,
  eat: function () {
    const favfood = "Paneer";
    return {
      favfood: favfood,
      str: `daily eats ${favfood}`,
    };
  },
};
//Activity-2
//task-3
function product(a, b) {
  return a * b;
}
function reminder(a, b) {
  return a % b;
}

//task-4
function greet(name) {
  return `Hello ${name}`;
}

//Activity-1
//task-1

//Activity-1
//task-1

//Activity-1
//task-1
module.exports = {
  default: greet,
  sumOfTwo,
  person,
  prod: product,
  rem: reminder,
};
