"use strict";
function SumCalculate(number) {
    return number.reduce((accumulator, value) => accumulator + value, 0);
}
let arra = [3, 4, 5, 6, 7, 8];
let sum = SumCalculate(arra);
console.log(sum);
