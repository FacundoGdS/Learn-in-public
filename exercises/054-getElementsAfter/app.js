function getElementsAfter(array, n) {
  let newArr = array.splice(n+1);
  return newArr;
};

console.log(getElementsAfter([1,2,3,4],1));

// function getElementsAfter(array, n) {
//   let newArr = [];
//   for (let i = n; i < array.length-1; i++){
//     newArr = newArr.unshift(array[i]);
//   };
//   return newArr;
// }; Intento más manual...