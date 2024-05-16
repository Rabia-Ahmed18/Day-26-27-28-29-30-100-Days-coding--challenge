"use strict";
// =============================QUESTION # 84========================
// This function swaps the javascript with typescript in sentence.
function replaceJavascriptWithTypescript(sentence) {
    return sentence.replace(/Javascript/g, "Typescript");
}
console.log(replaceJavascriptWithTypescript("I like Javascript & Javascript is awesome!"));
