//Promise.any() method in JS
let p1 = new Promise((resolve , reject)=> {
    reject(1)
})

let p2 = new Promise((resolve , reject) => {
  setTimeout(resolve,100,2)
})

let p3 = new Promise((resolve, reject)=> {
    reject(3)
})

let p4 = new Promise ((resolve, reject)=>{
    setTimeout(reject,100,4)
})



Promise.race([p1,p2,p3,p4]) 
    .then((resp)=>{
        console.log("FIRST OF OUR RESPONSES", resp);
    })
    .catch((err)=>{ 
        console.log(`Errors : ${err}`); 
    })
//above logs Errors:1

//with Promise.race method the first promise either resolved or rejected is the response
//But with Promise.any() method the promise which is resolved is the response
//Promise.any checks all the promises and response the first promise that is resolved. After that it stops.
//If none of the passed parameter promises are resolved than only it runs the .catch() method
Promise.any([p1,p2,p3,p4])
.then(resp => {
    console.log("At least one worked", resp);
})
.catch(err => {
console.log(`CATCH ERROR`, err);
})