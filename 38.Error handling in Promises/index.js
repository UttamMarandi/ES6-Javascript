//Error handling in JS

function p() {
    return new Promise((resolve,reject) => {
        resolve(123)
        reject(321)
        throw new Error("Error inside promise") //this is also handled by .catch()
    }) 
    
}

p().then(ftw)
   .catch(wtf)

//.then can take two parameters 1st for resolve() and 2nd for reject().That means we don't need catch if we use two parameters in then
console.log("use obky .then() only to show error");
p().then(ftw,wtf)


function ftw(e){
    console.log("ftw resolve", e);

}

function wtf(e) {
    console.log("wtf reject",e);
    //log message only
    console.log("log message only", e.message);

}

function wtf2(e) {
    console.log("wtf2 reject", e);
}