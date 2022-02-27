function getAllLetters(str) {
    return [...str];
    // let newarr = [];
    // let letter = '';
    // for(let i = 0; i < str.length; i++){
    //     letter = str.charAt(i);
    //     newarr = newarr.unshift(letter);
    // };
    // return arr;
};

var output = getAllLetters('Radagast');
console.log(output);
// --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
