//Apply promises


//calling reject directly

let p1 = new Promise(function(resolve , reject){
    if(true){
        resolve("p1 resolved")
    }
    else {
        reject("p1 reject")
    }
})

//calling resolve directly
let p2 = Promise.resolve("P2 resolved")
//I am taking this as Promise is an object and resolve is one of its methods

let p3 = () => Promise.resolve("null") //even if it has null value , still a resolved promise as resolve() is called

//use promise
p1.then((result) => {console.log("P1:" , result);})

p2.then((result) => {console.log("P2:", result);})

p3().then((result) => {console.log("P3:", result);}) //loggs null

//call reject()
let p4 = () => Promise.reject("P4 Rejectes") //() same as p4()

p4().catch((result)=> { console.log("P4:", result)}) 

p4().then((result) => {console.log("P4:", result);}) //.then() never gets called as p4 calls reject()
    .catch((result) => {console.log("P4:", result);})