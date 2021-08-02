//ES6 Template strings

// wrapped with back-tick character like table names in SQL
// Variables and expressions wrapped in ${ }
// Tagged Template Literals


let message = 'I\'m going to the store';
let message1 = "And then he said, \"That's what she said.\"";

console.log(message);
console.log("Message with quotation mark", message1);

//concat strings
let item = 'Heineken';
let message2 = 'I\'m going to buy ' + item + ' at the store';
let message3 = ''.concat('I\'m going to buy ', item, ' at the store');

console.log(message2);
console.log("using string concate : ", message3);

//all above ways are not efficient as we have start and stop the strings if we want to insert a variable
//template strings uses backtick ~ character . all of the text inside it is cansidered as string.
//if we want to insert a varibale we use ${variable}/ also we can put any javacript code within it


let arr = ['a','b','c'];
let message4 = 'The first letter is ' + arr[0] + '.';


let msg = `I'm going to buy ${item.toUpperCase()} at the store`;
console.log(msg);
//if we want to use a backtick within the string we can escape it using \~


//tagged template literals we use `` for defining template tags
function bubba(strings , ...expressions) { //bubba() will receive an array of strings and an array of exprssions which we expand using spread operator
    console.log(strings.length);
    console.log(expressions.length);
    console.log(strings); //counts two empty strings..one before expression and one after expression
    console.log(expressions); //logs ${item} value

    return `Thanks for playing tagged template literals ` +expressions 
}


let str = bubba `${item}` //it means call the function bubba() and pass anything within `` as its parameter
//
console.log(str);

//usasage
//if we need to rearrange the strings and expressions continuously , we use tagged template literals
//practical usage :- multilingual website