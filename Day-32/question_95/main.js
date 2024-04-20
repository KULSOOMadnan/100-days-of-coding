"use strict";
function numbersGreaterThan10(array) {
    return array.filter(numbers => numbers > 10);
}
let array = [1, 4, 6, 7, 8, 9, 11, 12, 15, 17, 3];
console.log(numbersGreaterThan10(array)); //[ 11, 12, 15, 17 ]
