const repeatString = function(word, number) {
    if (number < 0){
        return "ERROR"
    }

    const repeatedString = [];
    for (i = 0; i < number; i++){
        repeatedString.push(word);
    }
    return repeatedString.join("");
};

// Do not edit below this line
module.exports = repeatString;
