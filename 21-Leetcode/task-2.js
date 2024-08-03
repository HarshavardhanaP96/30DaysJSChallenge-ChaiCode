//we can use loops or recursion
function reverseNum(num, newNum = 0) {
  num = Math.abs(num);
  newNum = newNum * 10 + (num % 10);
  if (num < 10) {
    return newNum;
  }
  return reverseNum(Math.floor(num / 10), newNum);
}

const reverseN = reverseNum(258);
console.log(reverseN);
