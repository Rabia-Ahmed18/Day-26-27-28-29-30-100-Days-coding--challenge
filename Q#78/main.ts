 // ======================== QUESTION # 78 =============================

// Function that declares for squering a number
function squareDeclaration(number:number):number{
    return number * number;
}

// function expression for squaring the number
const squareExpression=function(number:number){
    return number*number;
}

// calling both the functions to square a number
console.log(squareDeclaration(4));
console.log(squareExpression(5));

