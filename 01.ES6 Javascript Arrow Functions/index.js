//ES6 (fat) Arrow functions
//works best in callback function scenarios
//parenthesis around parameters if more than one
//curly braces around function body if more than one line statement
//return only needed if more than one line of code

//abbreviated syntax for functoin...no additional functionality

let numbers = [123,234,345,456,567]
let names = ["uttam" , "tommy", "paras", "salman", "sanjay", "tarun"]

//create a new array whose values are greater than 300

//normal function 
let nbig300 = numbers.filter(function(num){
    return num > 300
})
console.log("numbers greater than 300 normal function", nbig300);

let big300 = numbers.filter(item => item > 300)
//function keyword ommitted, return statement omitted b.c one line of code
//note: make sure that body is one line of code if you want to remove return.
// if not return statment is mandotory for anyonyomous function in filter
console.log("numbers greater than 300 arrow function", big300);

//use forEach on names, use arrow funcitons
names.forEach(item =>{console.log(item);})

//take two parameters for forEach callback fn
names.sort().forEach((item , index) => {console.log(item,index) //paranthesis on parameter b.c more than one parameter
return item
})

