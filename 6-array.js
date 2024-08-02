//Activity-1
//Task-1
const arr1 = [1, 2, 3, 4, 5];

console.log(arr1);

//Task-2
const a1 = arr1[0];
const al = arr1[arr1.length - 1];
console.log(a1, " ", al);

//Activity-2
//Task-3
arr1.push(6);
console.log(arr1);

// task-4
arr1.pop();
console.log(arr1);

// task-5
arr1.shift();
console.log(arr1);

// task-6
arr1.unshift(1);
console.log(arr1);

//activity-3
//task-7
const arr2 = arr1.map((a) => a * 2);
console.log(arr2);

//task-8
const arr3 = arr1.filter((a) => a % 2 == 0);
console.log(arr3);

//tsak-9
const arraysum = arr1.reduce((arrsum, a) => (arrsum += a));
console.log(arraysum);

//activity-4
//task-10
for (let index = 0; index < arr1.length; index++) {
  const element = arr1[index];
  console.log(element);
}

//task-11
arr1.forEach((ele) => {
  console.log(ele);
});

//Activity-5
//tsak-12
const arrmulti = [
  [1, 2, 3, 5, 4],
  [6, 5, 4, 1, 3],
  [5, 16, 4, 16, 1],
];
for (const set of arrmulti) {
  for (const ele of set) {
    console.log(ele);
  }
}

//task-13
console.log(arrmulti[2][1]);
