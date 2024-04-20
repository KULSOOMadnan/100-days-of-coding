"use strict";
function identiclString(word, word1) {
    return word.toLowerCase() === word1.toLowerCase();
}
console.log(identiclString("kulsoom", "Kulsoom")); // true
console.log(identiclString("aadnan", "Adana")); // false
