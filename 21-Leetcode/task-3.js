function isPalindrome(num, originalnum = num, revenum = 0) {
  num = Math.abs(num);

  if (num === 0) {
    return originalnum === revenum;
  }

  return isPalindrome(
    Math.floor(num / 10),
    originalnum,
    (revenum = revenum * 10 + (num % 10))
  );
}

const check = isPalindrome(888);
console.log(check);
