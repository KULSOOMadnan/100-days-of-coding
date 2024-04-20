"use strict";
function personAgeCategory(ageNum) {
    if (ageNum >= 1 && ageNum <= 12) {
        return ("you are children now");
    }
    else if (ageNum >= 13 && ageNum <= 19) {
        return ("You are teenager");
    }
    else if (ageNum >= 20 && ageNum <= 78) {
        return ("You are adult");
    }
    else {
        return ("You get old");
    }
}
console.log(personAgeCategory(15));
