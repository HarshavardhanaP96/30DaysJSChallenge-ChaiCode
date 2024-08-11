//Activity-1
//Task-1
let arr1 = [999, 498, 321, 260, 97, 11];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 1; j < arr1.length - i; j++) {
    if (arr1[j - 1] > arr1[j]) {
      let temp = arr1[j - 1];
      arr1[j - 1] = arr1[j];
      arr1[j] = temp;
    }
  }
}

console.log(arr1);

//Task-2

for (let i = 0; i < arr1.length; i++) {
  let small = i;
  for (let j = i + 1; j < arr1.length; j++) {
    if (arr1[j] < arr1[small]) {
      small = j;
      let temp = arr1[small];
      arr1[small] = arr1[j];
      arr1[j] = temp;
    }
  }
}

console.log(arr1);

//Task-3 quickSort

//Activity-2
//Task-4

function linearSearch(arr1, target) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == target) {
      return i;
    }
  }
  return "Number Not Found";
}

console.log(linearSearch(arr1, 97));

//Task-5

function binarySearch(arr1, target) {
  let beg = 0;
  let end = arr1.length - 1;

  while (beg <= end) {
    let mid = Math.floor((end - beg) / 2) + beg;

    if (arr1[mid] == target) {
      return mid;
    }
    if (arr1[mid] > target) {
      end = mid - 1;
    } else if (arr1[mid] < target) {
      beg = mid + 1;
    }
  }

  return "element not found";
}

console.log(binarySearch(arr1, 321));

//Activity-3
//Task-6
let alpha = new Array(26).fill(0);

let s =
  "lndskf nlsjdnldja dalnalsdjnadlj slandaldjad dsalnldjnadluasdalindawldin lksnadlndaljdnlasaldjn";

for (let i = 0; i < s.length; i++) {
  const element = s.charAt(i).toLowerCase();
  alpha[element.charCodeAt(0) - 97]++;
}

console.log("counts are as below");

for (let i = 0; i < alpha.length; i++) {
  console.log(String.fromCharCode(i + 97), " : ", alpha[i]);
}

console.log("end of count");

//task-7

//Activity-4
//Task-8

//task-9

function mergedArray(arrA, arrB) {
  let la = arrA.length;
  let lb = arrB.length;
  let i = 0,
    j = 0,
    mergedArr = [];
  while (i != la && j != lb) {
    if (arrA[i] <= arrB[j]) {
      mergedArr.push(arrA[i++]);
    } else {
      mergedArr.push(arrB[j++]);
    }
  }
  while (i != la) {
    mergedArr.push(arrA[i++]);
  }
  while (j != lb) {
    mergedArr.push(arrB[j++]);
  }
  return mergedArr;
}

console.log(
  mergedArray([2, 10, 29, 33, 57, 150], [2, 2, 2, 58, 126, 268, 358])
);

//Activity-5
//Task-10

//Task-11
