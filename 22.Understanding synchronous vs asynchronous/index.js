//Understanding synchronous vs asynchronous in javascript

//javascript is a single threaded language . It is a single process in the computer which means the flow of control is top to bottom in a procedural way.

let a =5;
let b = 50;

let a1 = function() {return 5}
let b1 = function() {return 50}

console.log(a1());

console.log(b1());

let a2 = function(num) {return 5*num}
let b2 = function() {return 50}

console.log(a2(b2())); //function as a parameter

//all of the above line of code is synchronous 
//below are few asynchronous tasks
/**
        setTimeout, callbacks for geolocation, Promises, fetch, ajax, filesystem interaction, database calls, even DOM event listeners
**/
//asynchronous function allows the flow of control to move forward until asynchronous task are resolved. 

let a3 = 100
setTimeout(() => a3+1 , 1)
console.log(a3);
//the value of a3 logs 100 , event after we add 1. This is b.c setTimeout() is asynchronous code
setTimeout(() => {a3++
console.log(a3); //this logs 101 but in the end //asynchronous
}, 0) //still logs 100 , even if we set time to 0 miliseconds
console.log(a3);

//so in javacript , synchronous code runs first and then asynchronous code is run

//create a promise
let p = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve("Yo")
    },0)

})
console.log(p);
//this logs also before code line 32 b.c the variable p is synchronous ..so p gets a value of "pending" promise 

setTimeout(function(){ //asynchronous
    console.log(p);
},10)
console.log(p); //synchronous

p.then(function(val){ //.then says as soon as the promise is reloved run .then() , so the time value matters for the moment it is run. if we set the time to 0 it runs before line 51 , but if set to 500 , it runs last
    console.log(val);
})

//trick :- to check asynchonous code..check the console look at the line in which each result get logs out. If any result happens after it's below result are shown means asynchronous code