const functions = require("./13-module"); //just to add one default among other undefault
const { sumOfTwo, person, rem, prod } = functions;
const greet = functions.default;
const c = require("lodash");
const axios = require("axios");

const random = require("./task_5");

const res = sumOfTwo(5, 9);
console.log(res);

const p1 = person;
console.log(p1, p1.eat());

console.log(prod(8, 6));
console.log(rem(19, 3));

console.log(greet("Ganesh"));

console.log(random.PI);

//Task-6
const a = [1, 2, 3, 4, 5, 6, 7];
const chunckedArray = c.chunk(a, 3);

console.log(chunckedArray);

//task-7
async function fetchdata() {
  const res = await axios.get(
    "https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873"
  );
  console.log(res.data);
}

fetchdata();
