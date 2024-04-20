// This function changes a string into a number
function convertStringToNum (str: string): number {
    return parseFloat(str); // Converts the string to a number
}

// Example: Turning a numeric string into a real number
console.log(convertStringToNum("789")); // Outputs: 789
console.log(convertStringToNum("222")); // Outputs: 222
// We're taking strings that look like numbers and turning them into actual numbers.