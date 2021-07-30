//SPREAD and REST operators
//Added with ES6
// Both SPREAD and REST operator are represented using the three dots ...
// two sides of the same operation
//the ability to take an array and split it into its indivisual elements or take a bunch of elements and combine them into a single array

let beers = ['Corona', 'Heineken'];
let stuff = [22, 'Bob', true, beers];

//SPREAD - expand an array into it's elements
myFunc(...stuff) //when executed within the the function , stuff array has already been expanded into it's elementsf using ... operator
console.log("spread oprator",  ...stuff); //expands the stuff array

//defining function
function myFunc(age, name, isStudent, beerList) { //four parameters b.c stuff is already expanded into it's respective elements
    console.log(name, "is age", age);
}

//limitation of spread operapter
// let spread = ...stuff //this code is wrong. we cannot use spread operator and assign it to a varibale.
//arrow operator has to be used as funciton argument during function call or within arrays 

//use spread operator within arrays
let spread = [...beers]  //this works but no point as it logs the beers array only. when other elements are present than we see it's potention
console.log("use spread operator within arrays cotaining beers only", spread); 

spread = ["Royal stag", "Tommy Hifiger" , ...beers]
console.log("use spread operator within arrays containing elements ", spread);
//all strings are logged as one single list

//REST OPERATOR - collects multiple elements and condenses them into a single element array
//this is used within function parameter during function defination or within arrays

//define a function and use Rest operator

function resFunction(age, name, ...list) { //any  other argument that is passed to resFunciton during function call is stored is list b.c of REST operator
    console.log(name , "is", age);
    list.forEach(item => console.log(item)) //;ogs all the item passed to list array
}

resFunction(22, "Uttam", beers, "hello beer", stuff) //we have passed three more argument along with name and age. all these will get passed in list 
