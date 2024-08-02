//activity-1
//tak-1

function numcheck(num1) {
  if (num1 % 2 == 0) {
    console.log("it's even");
  } else {
    console.log("it's odd");
  }
}
numcheck(284);

//task-2
function square(num2) {
  return num2 * num2;
}

const b = square(12);
console.log(b);

//activity-2
//task-3
function maximumoftwonum(n1, n2) {
  return Math.max(n1, n2);
}

const c = maximumoftwonum(-26, 18);
console.log(c); // This will print 26

//task-4
function concatstr(s1, s2) {
  return s1 + s2;
}
const d = concatstr("hi", " I am here");
console.log(d);

//Activity-3
//task-5
const twoNumSum = (n1, n2) => {
  return n1 + n2;
};

const e = twoNumSum(15, 49);
console.log(e);

//task-6
const contains = (c, str) => {
  return str.includes(c);
};

const f = contains("h", "i am here");
console.log(f);

//Activity-4
//task-7
function maxoftwonum(n1, n2 = 5) {
  return n1 * n2;
}

const g = maxoftwonum(15, 26);
console.log(g);

//task-8
function greeting(str1, str2 = 24) {
  return `Hello ${str1}, Since you are ${str2}, youarean adult`;
}

const h = greeting("harsha", 28);

console.log(h);

//activity-5
//tsak-9
function callntimes(n, func) {
  return function () {
    for (let index = 1; index <= n; index++) {
      func();
    }
  };
}

function printhi() {
  console.log("hi");
}
const hi = callntimes(3, printhi);
hi();

//task-10
function apply(fun1, fun2, num) {
  return fun2(fun1(num));
}

function double(val) {
  return val * 2;
}

function sq(val) {
  return val * val;
}

const l = apply(double, sq, 10);
console.log(l);
