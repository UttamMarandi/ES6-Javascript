//Maps vs Objects
// ES6 Maps are a good replacement for Objects
// in many circumstances but not all
//A map is a collection of key : value pairs wrapped inside map

let a = {'name': 'Sherlock'};
let b = {'name': 'Watson'};
let people = {};

people[a] = 'detective'
people[b] = 'doctor'

console.log(people[a], people[b]); //logs doctor doctor 
//but we are expecting detective , doctor
//In objects , object keys are converted into strings
//this means we cannot use objects (here a, b) as keys for other objects
console.log(people);
console.log("Object a",a);
console.log("Object b",b);

//this is where maps come in
//map is structure made up of key : value pairs and keys can be an object , strings , symbols or numbers


let characters = new Map()
characters.set(a, 'Detective') //setting values in map
characters.set(b, 'doctor')
console.log("using map", characters.get(a), characters.get(b));
//access map key : values , use .get(keys)
//by defination above we have set a and b as objects
//but in map they are acting as keys 
console.log("Object a",a);
console.log("Object b",b);

//use for of to access map
for (let [key, value] of characters) { //for of loop access the values of each keys 
    console.log(`${key} : ${value}`);
}