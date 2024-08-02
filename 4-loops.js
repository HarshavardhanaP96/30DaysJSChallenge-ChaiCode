//Actovity-1
//Task-1
for (let index = 1; index <= 10; index++) {
  console.log(index);
}

//Task-2
for (let index = 1; index <= 10; index++) {
  console.log("5 x", index, "=", 5 * index);
}

//Activity-2
//task-3
let i = 1,
  sum = 0;
while (i < 11) {
  sum += i;
  i++;
}
console.log(sum);

//Task-4
let j = 10;
while (i > 0) {
  console.log(i);
  i--;
}

//activity-3
//task-5
let a = 1;
do {
  console.log(a);
  a++;
} while (a <= 5);

//task-6
let fact = 1,
  num = 10;

do {
  fact = fact * num;
  num--;
} while (num > 0);

//activity-4
//task-7
let pattern = "";

let n = 5;
for (let i1 = 0; i1 < n; i1++) {
  for (let i2 = 0; i2 <= i1; i2++) {
    pattern += "* ";
  }
  pattern += "\n";
}
console.log(pattern);

//activity-5
//task-8
for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    continue;
  }
  console.log(index);
}

//task-9
for (let index = 1; index <= 10; index++) {
  if (index == 7) {
    break;
  }
  console.log(index);
}
