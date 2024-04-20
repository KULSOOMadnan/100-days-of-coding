"use strict";
function area(length, width) {
    return width * length;
}
console.log(area(8, 9));
// refactor it  into arrow fuction
let AreaOfRectangle = (len, width) => width * len;
console.log(AreaOfRectangle(4, 8));
