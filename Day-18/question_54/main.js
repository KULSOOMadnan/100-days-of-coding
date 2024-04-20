"use strict";
// A way to make a flexible list
function createObjectWithDynamicKey(value, keys) {
    let dynamickey = {};
    // Setting up a section in the list with a changeable name
    dynamickey[value] = keys;
    return dynamickey;
}
// Using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("apple", "green");
// Showing the user's choice
console.log(userPreference);
