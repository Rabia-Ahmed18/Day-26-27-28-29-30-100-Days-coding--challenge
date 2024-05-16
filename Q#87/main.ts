// ===================QUESTION # 87 ===========================


// This function takes out the first 10 characters from any text
function separateFisrtTenCharacters(str:string):string{
    return str.substring(0,10);  //"substring is used to extract the characters"
}
console.log(separateFisrtTenCharacters("Hello , Javascript world!"));