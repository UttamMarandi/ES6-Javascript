//Promises.race() method

//we have a sitution where we have multiple promises and resloving of any one of them will do the job.
//in that case Promises.race() is the the mehtod to use
//Promise.race() takes an array of promises as its parameters and runs the moment any one of them get's resolved

let p1 = Promise.reject(111) //never gets resolved
let p2 = Promise.resolve(222)

let p3 = new Promise (function(resolve, reject){
    setTimeout(resolve,1000,333) //call resolve after 1000ms and passed 333 to it
})

Promise.race([p1,p2,p3]).then(result => {
    console.log("winning:", result);
})
.catch(result => {
    console.log("Failed", result);
})

//above Promise logs Failed b.c p1 promise is called first
//but if we switch places in parameter [p2,p1,p3]array we can get winning:222 as result
//even if we set[p3,p2,p1] as parameter , p2 wins as p3 is delayed using setTimeOut