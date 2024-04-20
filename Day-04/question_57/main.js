"use strict";
let gradesList = [70, 90, 80, 56, 59, 89, 67, 89];
let total = gradesList.reduce((add, total) => add + total);
let averageGrades = gradesList.reduce(() => total / gradesList.length);
console.log(averageGrades);
