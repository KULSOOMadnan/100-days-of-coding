"use strict";
function doubleCheck(name, age) {
    return name && age;
}
let compare = doubleCheck(false, false);
console.log(compare);
