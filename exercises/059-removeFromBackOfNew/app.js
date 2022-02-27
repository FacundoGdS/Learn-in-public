function removeFromBackOfNew(arr) {
  let remove = arr.pop();
  return arr;
};

let arr = [1, 2, 3];
console.log(arr); // --> [1, 2, 3]
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
