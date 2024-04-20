"use strict";
function concate(numericVal, text) {
    // Number() this function change any kind of type in number 
    return Number(numericVal) + Number(text);
}
let join = concate(6, "8");
console.log(join);
