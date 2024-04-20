"use strict";
function numbmerChecking(num) {
    return isNaN(num);
}
let number = numbmerChecking("kulsoom");
console.log(number); // true
number = numbmerChecking(345);
console.log(number); // false
