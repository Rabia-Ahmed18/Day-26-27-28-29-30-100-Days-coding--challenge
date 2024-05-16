"use strict";
// ======================== QUESTION # 81 ==========================
// this function shows eveydetail about an object function
function logObjectProperties(obj) {
    for (let property in obj) {
        // loop through each property in the object
        console.log(`${property}: ${obj[property]}`);
    }
}
// using the function with the car object
logObjectProperties({
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "Black",
});
