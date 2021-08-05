//Intro to javascript symbols
//A symbol value may be used as an identifier for object properties; this is the data type's only purpose.

//Earlier javascript has 5 primitiva data types
//numbers , strings , boolean, null, undefined
//Now , we have anothe one..symbols
//symbols was added so that structures like object could be iterated over
//Every symbol value returned from Symbol() is unique.
//A symbol value may be used as an identifier for object properties; this is the data type's only purpose.

const s1= Symbol() //symbol is a container with a unique value
const s2 = Symbol(123) //symbol can take "description" as its parameter. The description has no practical use...& most of the time used for debugging purposes
const s3 = Symbol("steve")

console.log(s1);
console.log(s2);
console.log(s3);

console.log("type of s2", typeof s2);
console.log("convert to string", s3.toString()); //possible

//proof that symbols are unique
console.log("Symbol()==Symbol()",Symbol()==Symbol());
console.log("Symbol()===Symbol()",Symbol()===Symbol());

console.log("Symbol(24)==Symbol(24)",Symbol(24)==Symbol(24));
console.log("Symbol(24)===Symbol(24)",Symbol(24)===Symbol(24));
//symbols are used as keys for objects as a unique identifier

//we can define a key to identify the symbol using Symbol.for
const s4 =Symbol.for(123) //123 is the key that identifies the symbol
console.log(Symbol.for(123) ==Symbol(123)); //false as (123) is a description and .for(123) is a key
console.log(Symbol.for(123)===Symbol.for(123));
//returns true as both symbol has the same keys..and as symbol are unique both reprsent the same thing , hence true

console.log(Symbol.keyFor(s2)); //returns undefined
//.keyFor(symbol variable) checks whether symbol has a key or not. returns undefined if key is not defined
console.log(Symbol.keyFor(s4)); //returns the key 

//create an object containing symbol as keys and values
let obj = {} //declaring an object
obj["prop1"] = "value1"
obj["prop2"] = "value2"
obj[Symbol()] = "value3"
obj["prop3"] = Symbol()

//log keys and values of objects
for(p in obj){
    console.log(p , obj[p]);
}

//do not log the symbol()
//for in loop do not log any key of an object which is a symbol

//use json.stringify on obj
console.log("check if symbol() converted to strings",JSON.stringify(obj));

//do not log any key or values if it's a symbol

let s5 = Symbol.for(26)
console.log(s5);

console.log(Symbol.keyFor(s5));