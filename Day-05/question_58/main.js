"use strict";
// This program calculates the average of all scores given in argument
function averageScore(...rest) {
    // Adds all scores together and divides by the number of scores
    let total = rest.reduce((sum, score) => sum + score);
    return total / rest.length;
}
// Example: finding the average of six  scores
console.log(averageScore(50, 67, 89, 56, 90, 80));
