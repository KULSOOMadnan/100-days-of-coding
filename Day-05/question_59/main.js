"use strict";
function customAdders(addValue) {
    return function (number) {
        return number + addValue;
    };
}
let magicBox = customAdders(5);
console.log(customAdders(45));
