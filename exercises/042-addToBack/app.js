function addToBack(arr, element) {
  let newArr = arr;
  newArr.push(element);
  return newArr;
}

//Otra vez el test evaluó como correcto
// devolver un nuevo array contrario
//a la consigna.

var output = addToBack([1, 2], 3);
console.log(output); // -> [1, 2, 3]