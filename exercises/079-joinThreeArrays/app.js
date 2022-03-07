function joinThreeArrays(arr1, arr2, arr3) {
  let newarray = arr1.concat(arr2);
  let newarray2 = newarray.concat(arr3);
  return newarray2;
}
//Es más eficiente usar el método concat().

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]


/* Esta es una forma válida pero ineficiente.

function joinThreeArrays(arr1, arr2, arr3) {
  let newarray = [];
  for (i1=0;i1<arr1.length;i1++){
    newarray.push(arr1[i1]);
  }
  for (i2=0;i2<arr2.length;i2++){
    newarray.push(arr2[i2]);
  }
  for (i3=0;i3<arr3.length;i3++){
    newarray.push(arr3[i3]);
  }
  return newarray;
}

*/