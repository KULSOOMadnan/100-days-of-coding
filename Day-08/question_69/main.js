"use strict";
function diviser(value1, value2) {
    return {
        quotient: value1 / value2,
        remainder: value1 % value2
    };
}
let answer = diviser(15, 10);
console.log(answer);
