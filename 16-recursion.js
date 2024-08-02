//Activity-1
//Task-1
function fact(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  return num * fact(num - 1);
}

console.log(fact(5));

//Task-2
function fib(num) {
  if (num == 1) {
    return 0;
  }
  if (num == 2) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(12));

//Activity-2
//Task-3
const a = [5, 8, 11, 97, 157, 45];
const n = a.length;

function total(i) {
  if (i < 0) {
    return 0;
  }
  return a[i] + total(i - 1);
}

console.log(total(n - 1));

//Task-4
function maximum(arr, i) {
  if (i == n - 1) {
    return arr[i];
  }

  return Math.max(arr[i], maximum(arr, i + 1));
}

console.log(maximum(a, 0));

//Activity-3
//Task-5
let s = "kannada";

function reverseString(str) {
  if (str === "" || str.length === 1) {
    return str;
  }

  return str[str.length - 1] + reverseString(str.substring(0, str.length - 1));
}

console.log(reverseString(s));

//Task-6
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] != str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome(s));

//Activity-4
//Task-7
const arr = [12, 18, 26, 38, 99, 77, 99, 105, 689, 726];

function binarySearch(arr, target, beg, end) {
  if (beg > end) {
    return -1;
  }

  let mid = Math.floor((end - beg) / 2) + beg;
  if (target == arr[mid]) {
    return mid;
  }
  if (target > arr[mid]) {
    return binarySearch(arr, target, mid + 1, end);
  }
  if (target < arr[mid]) {
    return binarySearch(arr, target, beg, mid - 1);
  }
}

console.log(binarySearch(arr, 100, 0, arr.length - 1));

//Task-8
function countOccurence(arr, target, count, i) {
  if (i == arr.length) return count;
  if (target == arr[i]) {
    return countOccurence(arr, target, count + 1, i + 1);
  }
  return countOccurence(arr, target, count, i + 1);
}

console.log(countOccurence(arr, 99, 0, 0));

//Activity-5
//Task-9
