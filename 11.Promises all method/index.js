//Promises all method

//when you only want to run your code after ALL
// your promises are resolved.
// EG: fetching remote data from multiple locations

//we have a sitution where we have multiple promises for our asynchronous tasks and we want to set the code such that the page does nothing until and unless all promises are resolved

let p1 = () => Promise.resolve("Got the list of users")
let p2 = () => Promise.resolve("Got the list of viewers")
let p3 = Promise.resolve("Got the tweets") //no need for promise variable to be a function

//above we have three promises and we want to update nothing until we receive response from all the promises
//that's when Promises.all comes into play. It checks for all all the promises to be resolved and then runs the specified code

//Promises.all() takes an array containing each promise as it's parameter
//syntax :- Promises.all([promise1, promise2, promise3]).then()

//create first Promise.all

Promise.all([p1(),p2(),p3]).then(function(resultArr){ //.then() has access to all the resolve values
    console.log(resultArr[0]);
    console.log(resultArr[1]);
    console.log(resultArr[2]);
})