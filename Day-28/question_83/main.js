"use strict";
function textChange(parameter) {
    let upper = parameter.toUpperCase();
    let lower = parameter.toLowerCase();
    console.log(`
    UpperCase : ${upper}
    LowerCase : ${lower}`);
}
textChange("Adnan sheikh");
