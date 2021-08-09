//Practical use of promise finally

let p = new Promise((resolve,reject)=>{
    let rand = Math.random()
    if(rand > 0.5){
        resolve("good things");
    }
    else{
        reject("bad things");
    }
})

p
.then(console.log)  //not console.log() ..it logs out the value in resolve("")
.catch(console.log)
.finally(() =>{
    console.log("It will be ok");
}) //finally is going to happen regardless of either catch or then runs
