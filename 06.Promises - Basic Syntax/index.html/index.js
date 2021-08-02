//Promises- Basic syntax

//wrapper for anything async
//asyncronous is something which you don't know when it will happen but you are sure that it will happen
//ex- ajax calls, reading files, timeouts, geolocation, talk to a database, or anything that would use a callback function.
//use them to get rid of callback hell
//fetch() returns a promises

// let result = multiplyTwoNumbers(5,10)
// console.log(result);

//the above code is synchronous, you know what will happen after each step
//also the two lines of code gets executed instantaneousy

//asynchronous
// let photo = downloadPhoto("http//:localhost/tommy.jpg")
// console.log(photo); //will result undefined

//the above code is asynchronous, because we don't know when the function downloadPhoto() will retrive the image from server and store in photo
//by the time it happens , 2nd line is already executed. Hence , photo would be undefined
//fetching from server  is an asynchronous task

const rand = () => Math.floor(Math.random() * 10 )+ 1

//Promises returns two things ..a.when the task succeed-resolve and b.when the task fails-reject

//syntax of Paromises
// let p1 = new Promise(function(resolve,reject)) {  //the function preferrebly contains some asynchronous task
//     resolve(XC) //if the task succed
//     reject () //if the task fails
// }

//we will use this promise somewhere else in the code . if the promise succed then .then is called which takes resolve() parameter as parameter to i's callback function
// p1.then(function(XC)){

// }

//create first promise
let p1 = new Promise(function(resolve , reject){
    let x=5
    resolve(x) //.then() is called
    reject(x) //.catch() is called
})

p1.then(function(y){
    console.log(y); //loggs 5, function(y) takes the parameter of resolve i.e x
    return y
}).then(function(x){ //cool thing about function is that they can be chained. also if chaining the previous function needs to return something
    console.log("X+4", x+4);
}).catch(function(zz){ //no matter how many .then() are present there should be atleast one catch() , which is executed when reject() is called or if any of the .then() throw a error
    console.log("caught" , zz + 5);
    //we will not log 10 b.c resolve() is called in Promise() and .then() shows no error
})






