"use strict";
function roundoff(value1, value2) {
    let product = value1 * value2;
    return Math.round(product * 100) / 100;
}
let roundedoff = roundoff(5.69, 7.90);
console.log(roundedoff);
