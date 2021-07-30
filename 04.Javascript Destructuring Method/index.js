//Javascript Destructuring Method
//it is useful to extract values from objects and arrays and assigning them to multiple variables
//use of square brackets to extract from an array,
//use of parenthesis then curly brackets to extract from an object , parenthesis covers both the keys and the object, curly brackets covers only the keys
//use of only parenthesis to extract from an object within function parameter
let name, id, nm, num, star, planet, rest;

let personArr = ["Zaphod", 123, 'Betelgeuse'];

//access only name and number from personArr

[names , number] = personArr //destructuring
console.log("names and number from personArr ", names , number);

//skip number , access name and place
[names, , place] = personArr
console.log("skip number , access name and place", names, place);
//logs Zaphod and Betelgeuse
//Note:- I don't think we need to initially declare the varibales in order to use them

//acess number and everthing else after that in one element
[names , ...rest] = personArr //use of REST operator
console.log("acess number and everthing else after that in one element", names, rest);

//access elements of rest and find rest length
console.log("elements", rest[0], rest[1], "length", rest.length);

//OBJECTS
//we can access values of keys, using respective keys
let personObj = {name:"Arthur Dent", id:42, planet:'Earth'};

({name , id} = personObj)
console.log("access name and id from object", name , id);
//access planet and name
({planet,name}= personObj)
console.log("access planet and name", planet, names);

//note:- The keys used while destructuring should be same as keys of the object

//DESTRUCTURING WITHIN OBJECT

const f = ({name , planet}=personObj) => {console.log("name and planet of object ", name , planet);}

f(personObj)

//declare a varibale within destructuring

function destru({name,planet, star = "sol"}= personObj){
    console.log("declare a varibale within destructuring", name , planet, star);
}
destru()