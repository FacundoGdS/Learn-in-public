function countNumberOfKeys(obj) {
    let counter = null;
    for (key in obj){
        counter = counter + 1;
    };
    return counter;
};

var obj = {
    a: 1,
    b: 2,
    c: 3
  };
  var output = countNumberOfKeys(obj);
  console.log(output); // --> 3