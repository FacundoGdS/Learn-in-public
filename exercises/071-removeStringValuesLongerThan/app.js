function removeStringValuesLongerThan(num, obj) {
    for (key in obj){
        if (typeof obj[key] === 'string'){
            if (obj[key].length>num){
                delete obj[key];
            };
        };
/*         console.log(typeof obj[key]); */
    };

};

var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };
  removeStringValuesLongerThan(6, obj);
  console.log(obj); // { age: 20, location: 'Texas' }