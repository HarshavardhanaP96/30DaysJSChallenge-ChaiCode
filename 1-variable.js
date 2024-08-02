//Activity-1
//Task-1
var a = 10;
console.log(a);

//Task-2
let b = "hi";
console.log(b);

//Activity-2
//task-3
const z = true;
console.log(z);

//activity-3
//task-4
const h = 1;
const i = "me";
const j = true;
const k = {
  1: "hi",
  2: "2364",
};
const l = ["i", "am", "here"];

console.log(typeof h);
console.log(typeof i);
console.log(typeof j);
console.log(typeof k);
console.log(typeof l);

//activity 4
//task 5
let ab = "a";
ab = "b";
console.log(ab);

//activity 5
//task 6
const bc = "a";
// bc = "b";    >immutable
console.log(bc);

//Feature Request 1
const h1 = 1;
const i1 = "me";
const j1 = true;
const k1 = {
  1: "hi",
  2: "2364",
};
const l1 = ["i", "am", "here"];

console.log("data type of", h1, typeof h1);
console.log("data type of", i1, typeof i1);
console.log("data type of", j1, typeof j1);
console.log("data type of", k1, typeof k1);
console.log("data type of", l1, typeof l1);

//Feature Request 2
let letvar = "x";
console.log("value of letvar before re-assigning is ", letvar);
letvar = "y";
console.log("value of letvar after re-assigning is ", letvar);

const constvar = 0;
console.log("value of constvar before re-assigning is ", constvar);
try {
  constvar = 5;
  console.log("value of constvar after re-assigning is ", constvar);
} catch (error) {
  console.log(
    "Unble to update the value of constvar beacause of the error",
    error.message
  );
}
