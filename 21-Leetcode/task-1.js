//2 possible methods
//1. O(n^2) using array.
//2. o(n) using hashmap

function findTwosumIndices(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return { i, j };
      }
    }
  }
  return { i: -1, j: -1 };
}
const { i, j } = findTwosumIndices([8, 48, 12, 9, 18], 60);

if (i !== -1 && j !== -1) {
  console.log(i, " ", j);
} else {
  console.log("No sum pair found");
}
