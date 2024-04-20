"use strict";
let mixItem = ["kulsoom", 1, "pineapple", 5, 8, "potato", false];
let wordsItems = mixItem.filter(words => typeof words === "string");
console.log(wordsItems);
