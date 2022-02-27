function getElementsUpTo(array, n) {
  return array.splice(0,n);
};

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']

var output2 = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 2) 
console.log(output2); // --> ['a', 'b']