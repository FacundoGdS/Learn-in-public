function removeArrayValues(obj) {
    for (key in obj){
        if(typeof obj[key]==='object'){
            delete obj[key];
        };
/*         console.log(typeof obj[key]); */
    };
};

var obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there'],
  }
  removeArrayValues(obj);
  console.log(obj); // --> { b: 2 }

  // el typeof no parece distinguir
  // entre objetos y arrays, los toma como objetos
  