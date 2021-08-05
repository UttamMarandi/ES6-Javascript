//Combining async and await with promises
//error handling with promises


dothings()
function dothings() {
    let p = delay(5000) //p is a promise that wraps the delay() asynchronous task
        .catch(err => console.log("err", err.message)) //no .then() b.c we are not doing anything with the response 
    console.log(p); //this line is not a part of promise. we are just logging p which is a promise //reurns promise
}

function delay(ms) {
    //fetch() is just a promise too
    return new Promise((resolve , reject) => { //we are returning a promise
        resolve(ms)
        reject(new Error("bad things happened"))
    })
}

//convert above code to async await

dothings2()
async function dothings2() {//defining the function async
    let p = await delay2(5000) //returns 5000
    
    console.log(p); //here p is not a promise , its a variable that stores the value that dela() returns
}

function delay2(ms) {
    //fetch() is just a promise too
    return new Promise((resolve , reject) => { //we are returning a promise
        resolve(ms)
        reject(new Error("bad things happened"))
    })
    .catch(err => console.log("err", err.message)) 
}

//It's difficult to chain .then to await as the result of await funciton returned is not a promise but a varibale.
//so sometimes it can return undefined