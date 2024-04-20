"use strict";
// let allow us to reassignment of value 
let names;
names = "kulsoom";
names = "adnan";
console.log(names); // output  will be adnan
// bit id i reassign a value with the const variable it will show error
const age = 67;
try {
    // age = 89
}
catch (error) {
    console.log("Error TS2588: Cannot assign to 'age' because it is a constant.");
}
