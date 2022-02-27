function getAllLetters(str) {
    return str.split('');
    // let newarr = [];
    // let letter = '';
    // for(let i = 0; i < str.length; i++){
    //     letter = str.charAt(i);
    //     newarr = newarr.unshift(letter);
    // };
    // return arr;
};

//también valía con poner "return [...str]"

var output = getAllLetters('Radagast');
console.log(output);
// --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
