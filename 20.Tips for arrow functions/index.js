//Tips and gotchas for arrow functions

let val = 42
let obj = {
    'prop1' : 'foo',
    'prop2' : 'bar'
}
//One parameter with and without curly braces
const f1 = (param) => param //no curly braces for function body
console.log("f1 no curly braces one line body",f1(7));
const f2 = param => param //no parenthesis or curly braces 
console.log("f2 no curly braces and no parenthesis", f2(7));
//ok if parameter is one and funciton body has one line of code\

const f3 = param => {param} 
console.log("with curly braces single line body", f3(7));
//f3 logs undefined
//this is b.c for single line function body if curly braces are not provided then by default that single line is returned
//but if curly braces are provided then we have explicitly define return method

const f4 = param => {
    return param
}
console.log("with curly braces single line body and return statement", f4(7));

//NO PARAMETERS
const f5 = () => val
//this is basically same as function f3() { return val}

console.log("no parameter", f5(7));
//use underscore instead of parenthesis for empty parameter
let f6 = _ => val
console.log("no parameter underscore" ,f6() );

//RETURNING OBJECTS
const f7 = (param) => obj
console.log("return object using variable", f7());

// const f8 = (parame) => {'prop1' : 'foo','prop2' : 'bar'}
//error b.c curly braces is used as function body instead of object wrapper

const f8 = ( param) =>  ({'prop1' : 'foo','prop2' : 'bar'})
console.log("return object body ", f8());