//Activity-1
//Task-1
const str1 =
  "Hi, I am harsha. I am learning Javascript. it is taking me too much time to learn Javascript";

const reg1 = /Javascript/g;

const arr1 = str1.match(reg1);

console.log(arr1);

//Task-2

const str2 =
  "I for got my rollnumber quite often. I am condused is it 42 or 47";

const reg2 = /[0-9]/g;
const arr2 = str2.match(reg2);

console.log(arr2);

//Activity-2
//Task-3
const str3 =
  "I for got my Rollnumber quite O9ften. I am condused is it 42 or 47";
const reg3 = /\b[A-Z][a-z]*\b/g;

const arr3 = str3.match(reg3);
console.log(arr3);

//Task-4
const str4 =
  "I for got my Rollnumber quite O9ften. I am condused is it 42 or 47";
const reg4 = /[0-9]+/g;

const arr4 = str4.match(reg4);
console.log(arr4);

//Activity-3
//Task-5
const str5 =
  "I for got my Rollnumber quite O9ften. I am condused is it 42 or 47. my number is (826) 265-4879";
const reg5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;

const arr5 = str5.match(reg5);

if (arr5) {
  const areaCode = arr5[1];
  const centralOfficeCode = arr5[2];
  const lineNumber = arr5[3];
  console.log(areaCode, " ", centralOfficeCode, "-", lineNumber);
}

//Task-6
//username and domain from email

//Note: match can be used to find only one instace of subgroup or many instace of target without subgrouop
const str6 =
  "I for got my Rollnumber quite O9ften. I am condused is it 42 or 47 harsha@gmail.com. my other email is harsha2@gmail.com ";
const reg6 = /\b([A-Za-z0-9_.+-]+)@([A-Za-z0-9.-]+\.[A-Za-z]{2,})\b/g;
let arr6;
while ((arr6 = reg6.exec(str6)) !== null) {
  const username = arr6[1];
  const domain = arr6[2];
  console.log("username:", username, " ", "domain:", domain);
}

//Activity-4
//Task-7
const str7 =
  "I for got my Rollnumber quite O9ften. I am condused is it 42 or 47";
const reg7 = /^I/g;

const arr7 = str7.match(reg7);
console.log(arr7);

//Task-8
const str8 =
  "I for got my Rollnumber quite O9ften. I am condused is it 42 or 47";
const reg8 = /7$/g;

const arr8 = str8.match(reg8);
console.log(arr8);

//Activity-5
//Task-9

//Password Validation
const str9 = "Harsha@157";
const reg9 =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$%&*]{8,}$/g;

let isValid = reg9.test(str9);
console.log(isValid);

//Task-10
// URL validation

const str10 = "https://youtube.com";
const reg10 =
  /^(https:\/\/www\.)?([a-zA-Z0-9!@#$%&*]+)\.([a-zA-Z]{2,})(\/[^\s]*)?$/g;

isValid = reg10.test(str10);
console.log(isValid);
