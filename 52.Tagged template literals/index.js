//Tagged template literals

//Template literals
let num = 41;
let str1 = `"\t" and "\n" are escape sequences. ${num}`; //t & n are escaped meaning they represent tab and newline
let str2 = `"\\t" and "\\n" are escape sequences. ${num}`; //here we are printing "\t" and "\n" , not escaping anything
let str3 = String.raw`"\t" and "\n" are escape sequences. ${num}`; //String.raw logs everything in raw format without escpaing anything
let str4 = `The meaning of life is ${num + 1}.`;

console.log("number",num);
console.log("string1 =>",str1);
console.log("string2 =>",str2);
console.log("string3 =>",str3);
console.log("string4 =>",str4);

//Tagged template strings
console.log("Tagged template strings");

let first = 'ham';
let second = 'pineapple';
let txt = f`I don't like pizza with ${first} and ${second}.`; 
//tagged template literals allow us to use a funtion name infront of backticks. The content of backticks are passed to the function as arguments and whatever is returned from the function is logged
//the passed argument becomes an array where each string separated by an expression is a single element
//the expression are also passed as argument : 1st expression is 2nd argument , 2nd expression is 3rd argument and so on. better to use rest operator
console.log("txt before calling f",txt);

function f(str) { 
    return str
}
console.log("txt after calling f()",txt);
console.log("2nd iteration");
let text2 = f2`I don't like pizza with ${first} and ${second}.`; 

function f2(str, one, two) { //str is an array containing string , one is a variable holding first expression , two is a variable holding 2nd expression
    console.log("string"  , str);
    console.log("exprression 1", one);
    console.log("expression 2", two);
}

//use rest operator for exprression

let text3 = f3`I don't like pizza with ${first} and ${second}.`; 

function f3(str , ...expression) {
    console.log("string array", str);
    console.log("expression array", expression);
}

//write a function that converts expression in text4 to upperscase 
 console.log("write a function that converts expression in text4 to upperscase ");
let text4 = f4`I don't like pizza with ${first} and ${second}.`;  //f4 name of function

function f4(str , ...expression) {
    return expression.reduce((accumulator , singleExpresssion, index)=>{ //index represent the index of each singleExpressions. 
        return accumulator + singleExpresssion.toUpperCase()+str[index +1] //we know that no.of element in str is always one greater than expression. so we use index+1 to target the next element in string array

    },str[0]) //start with the first string in str array
    
}

console.log(text4);