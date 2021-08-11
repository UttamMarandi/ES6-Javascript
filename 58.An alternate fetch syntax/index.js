//An alternate fetch syntax

let url = 'https://jsonplaceholder.typicode.com/posts';

//SIMPLE FETCH

// fetch(url)
// .then(response =>{
    
//     console.log("resolve");
//     return response.json()
// } )
// .then(data => console.log(data))
// .catch(err => console.log("ERROR", err.message))

//SIMPLE PROMISE

// let p = new Promise((resolve , reject) => {
//     // resolve()
//     reject()
// })
// .then(response => { //.then() like promise can accept two function one for reslove and other for reject, 
//     //resolved
//     console.log("resolve");
// }, err => { //catch() within then
//     //sometimes we don't want the .catch() in the end to run , so we can specify .then() own .catch() specific to it
//     console.log("Error in then ",err);
// })
// .catch(err => {
//     console.log("err");
// })

fetch(url)
.then((response)=>{
    if(!response.ok){
        throw response.statusText
    }
    return response.json()
},err => {
    //first level catch
    console.log("Network error"); //if the error is caused due to "Network error" then this error is loggr
})
.then(data => console.log(data))
.catch(err => {
    console.warn("response.ok NOT");
    //for any other error we still move to this error
})