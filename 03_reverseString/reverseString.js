const reverseString = function(word) {
    const wordArray = [];
    reversedWord = [];
    for (i = 0; i <= word.length ; i++){
        wordArray.push(word.charAt(i));
    }
    reversedWord = wordArray.reverse();
    return reversedWord.join("");
};

// Do not edit below this line
module.exports = reverseString;
