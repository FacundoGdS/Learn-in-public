function countCharacter(str, char) {
    let counter = 0;
    for(let i = 0; i < str.length; i++){
        if (str.charAt(i)===char){
            counter = counter + 1;
        };
    };
    return counter;
};

console.log(countCharacter('I am a hacker', 'a'));