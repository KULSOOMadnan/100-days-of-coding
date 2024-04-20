"use strict";
// This function generates a random hexadecimal color code
function getRandomHexColor() {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color; // Returns the random color code
}
let colors = getRandomHexColor();
console.log(colors);
