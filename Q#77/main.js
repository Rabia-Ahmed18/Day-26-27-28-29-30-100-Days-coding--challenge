"use strict";
// ==============================QUESTION # 77 ===========================
// this function greets the user by name , or greets an anonymous user if no name is provided
function greetUser(name = "anonymous") {
    // says hello to the given name or to an anonymous user
    console.log(`Hello, ${name}`);
}
;
greetUser("rabia");
greetUser();
