function removeEvenValues(obj) {
    /* for (key of obj){
        console.log(obj[key] + 'Key OF obj', key);
    }; */
    for (key1 in obj){
        if (obj[key1]%2===0){
            delete obj[key1];
        };
/*         console.log(obj[key1] + ' Key IN obj', key1); */
    };
};

var obj = {
    a: 2,
    b: 3,
    c: 4
  };

removeEvenValues(obj);
console.log(obj); // --> { b: 3 }