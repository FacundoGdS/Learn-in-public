function removeOddValues(obj) {
    for (key1 in obj){
        if (obj[key1]%2!==0){
            delete obj[key1];
        };
    };
};

// Alt + supr (borro una línea)

var obj = {
    a: 2,
    b: 3,
    c: 4
  };

removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }