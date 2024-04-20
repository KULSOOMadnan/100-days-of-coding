"use strict";
function swapvalue() {
    let a = 5;
    let b = 10;
    console.log(`\nBefore swaping the value of a = ${a} , b = ${b}`);
    let c = a;
    a = b;
    b = c;
    console.log(`After swaping the value of a = ${a} , b = ${b}\n`);
}
swapvalue();
