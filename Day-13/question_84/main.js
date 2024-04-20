"use strict";
function replaceSentance(sentecne) {
    let textChange = sentecne.replace(/JavaScript/g, "Typescript");
    console.log(textChange);
}
replaceSentance("I am  having a lot of joy discovering JavaScript.");
