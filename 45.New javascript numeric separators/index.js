// Numeric Separators
//When dealing with big numbers it's difficult to examine how many digits are present in that number
//so numeric separator is an underscore(_) that can used between two digits not before first digit or after last digit.
//it will not affect the number , only helps in comprenhension

let num = 3942370710282;
console.log("number before",num);
num = 39_42_370_710_282
console.log("number after",num);
//both logs the same