//Promises and all settled method
let p1 = new Promise((resolve , reject)=> {
    resolve(1)
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

Promise.all([p1,p2,p3,p4]) 
    .then(resp => {
        console.log("All Four responses if all were good",);
    })
    .catch(err =>{
        console.log(`Error ${err}`);
    })

Promise.allSettled([p1,p2,p3,p4]) //.allSetteled() is used when we want to run through all the promises even if some promises fail
//rejected promises don't trigger the catch 
    .then(responses => {
        console.log("Finished with all four"); //p3 and p4 are failing , yet we don't get catch code
        responses.forEach((response, index)=>{ //all four promises logged with a key of "status" with value either fulfilled or rejected
            console.log(index, response); 
        }) 
    })
    .catch(err => {
        console.error(`Catch Error ${err}`);
    })