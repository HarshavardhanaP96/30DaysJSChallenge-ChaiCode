//Activity-1

//Tasl-1
let a = 12;
if (a > 0) {
  console.log("NUmber is greater than 0");
} else if (a < 0) {
  console.log("number is less than 0");
} else {
  console.log("Number is zero");
}

//Task-2
let age = 19;
if (age < 18) {
  console.log("not eligible to vote");
} else {
  console.log("eleigible to vote");
}

//Activity-2
//task-3
let x1 = 18,
  x2 = 9,
  x3 = 18;
let largest;
if (x1 > x2) {
  if (x1 > x3) {
    largest = x1;
  } else {
    largest = x3;
  }
} else {
  if (x2 > x3) {
    largest = x2;
  } else {
    largest = x3;
  }
}
console.log(largest);

//Activity-3
//Task-4
let day = 4;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursay");
    break;
  case 6:
    console.log("Friday");
    break;
  default:
    console.log("Saturday");
    break;
}

//Task-5
let grade = 4;
switch (grade) {
  case "A":
    console.log("Student grade is:", grade);
    break;
  case "B":
    console.log("Student grade is:", grade);
    break;
  case "C":
    console.log("Student grade is:", grade);
    break;
  case "D":
    console.log("Student grade is:", grade);
    break;
  case "E":
    console.log("Student grade is:", grade);
    break;

  default:
    console.log("Student grade is:", grade);
    break;
}

//Activity-4
// Task-6
let num = 56;
num % 2 == 0 ? console.log("Even") : console.log("odd");

//Activity-5
//Task-7
let year = 1985;
if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
  console.log("it's a leap year");
} else {
  console.log("it's not a leap year");
}
