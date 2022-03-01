var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    for (key in obj2){
         if (obj1[key]===undefined){
            /*  obj1[key] = obj2[key] */;
            /* console.log('Object 1 no contiene' +' '+ key); */
            obj1[key] = obj2[key];
        };
    };
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}

// function extend(obj1, obj2) {
//     let countpro = Object.keys(obj2).length;
//     for(let i=0;i<countpro;i++){};
// };

//Alt + Shift + A para comentar segmentos y descomentar