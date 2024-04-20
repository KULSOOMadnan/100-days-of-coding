// A way to make a flexible list
function createObjectWithDynamicKey( value: string ,keys: string) {
    let dynamickey : any = {};
    // Setting up a section in the list with a changeable name
    dynamickey[value]  = keys;
    return dynamickey;
}

// Using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("apple", "green");

// Showing the user's choice
console.log(userPreference);