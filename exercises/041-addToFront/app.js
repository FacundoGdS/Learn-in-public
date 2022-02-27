function addToFront(arr, element) {
  let newArr = arr;
  newArr.unshift(element);
  return newArr;
}

//Está mal la indicación de retornar
// el mismo array... El test lo aprobó cuando
//devolví un nuevo array, no el mismo dado...

var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

//Hint: you can use unshift