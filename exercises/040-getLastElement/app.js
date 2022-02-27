function getLastElement(array) {
  // your code here
  if (array.length === 0){
    return undefined;
  } else {
    return array[array.length-1];
  };
};

var output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4