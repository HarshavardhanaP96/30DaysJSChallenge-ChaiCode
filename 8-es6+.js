//activity-1
// task-1
const name1 = "Harsha";
const age1 = 28;
const str1 = `${name1} ${age1}`;

console.log(str1);

// task-2
const str2 = "Hi, My name is Harsha\n" + "I am here to fight back";
console.log(str2);

//activity-2
// task-3
const arr = ["hi", "Iam", "here", "My", "name", "harsha"];
const [first, second] = arr;

console.log(first + " " + second);

//task-4
const book4 = {
  title: "Jai Ganesh",
  author: "Hanuman",
  year: 2007,
};

const { title, author } = book4;
console.log(title + " " + author);

//activity-3
// task-5
const arr5a = [1, 5, 9, 7, 6];
const arr5b = [...arr5a];

arr5b.push(15);
arr5b.push(48);

console.log(arr5b);

//task-6
function sum(...arr5b) {
  let total = 0;
  for (let ele of arr5b) {
    total += ele;
  }
  return total;
}
console.log(sum(...arr5b));

//activity-4
// task-7
function product(num1, num2 = 1) {
  return num1 * num2;
}

console.log(product(5, 6));
console.log(product(5));

//activity-5
// task-8
const object = {
  name: "Harsha",
  greet() {
    console.log(`Hello ${this.name}`);
  },
};

console.log(object);

// task-9
const prop1 = "header";
const prop2 = "body";

const dynamicobj = {
  [prop1]: "Jai Mahadev",
  [prop1 + "-" + prop2]: "Bham Bham Bole",
};

console.log(dynamicobj);
