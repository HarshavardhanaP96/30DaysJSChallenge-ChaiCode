function isValidParenthesis(str) {
  const arr = [];

  let top = "";
  for (let i = 0; i < str.length; i++) {
    const element = str.charAt(i);
    switch (element) {
      case "(":
      case "{":
      case "[":
        arr.push(element);
        break;

      case ")":
        top = arr.pop();
        if (top != "(") return false;
        break;

      case "}":
        top = arr.pop();
        if (top != "{") return false;
        break;

      case "]":
        top = arr.pop();
        if (top != "[") return false;
        break;
    }
  }
  return arr.length === 0;
}

const check = isValidParenthesis("{([])()}{()[]({})}");
console.log(check);
