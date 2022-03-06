function removeStringValues(obj) {
    for (key in obj){
        if (typeof obj[key] === 'string'){
            delete obj[key];
        };
    };
};

var obj = {
    name: 'Sam',
    age: 20
};

removeStringValues(obj);
console.log(obj); // { age: 20 }

