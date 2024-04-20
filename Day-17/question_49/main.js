"use strict";
// function with rest parameter
function hobby(...rest) {
    return rest.forEach((hoby) => {
        console.log(` i enjoy ${hoby} `);
    });
}
//calling fuction with multiple arguments
let hobbies = hobby("eating", "reading", "coding", "cycling", "outdooring");
console.log(hobbies);
