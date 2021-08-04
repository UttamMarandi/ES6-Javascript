//Intro to async await functions
//async and await are two keywords that make asynchronous code more readable and easy
//async is used as a prefix to a function which converts the whole function to a promise. any asynchronous code within that funtion is prefixed with "await" so that js understand , it needs to halt for the asynchronous code to complete. In this way the flow of control is also maintained

//normal fetch
function getUser() {
    let counter = 0
    let output = document.getElementById("output")
    let rand = Math.floor(Math.random() * 10) + 1
    let uri = `https://jsonplaceholder.typicode.com/users/${rand}`

    //fetch
    fetch(uri)
        .then(response => response.json())
        .then(data => {
            output.textContent = JSON.stringify(data , null , 2)
            console.log(data);
            output.textContent += "REQUEST SENT"
        })
       
        return 42
}
let ret = getUser()
console.log(ret)

//async fetch
async function getUser2(){
    let outputa = document.getElementById("outputa")
    let rand = Math.floor(Math.random() * 10) + 1
    let uri = `https://jsonplaceholder.typicode.com/users/${rand}`
    
    let response = await fetch(uri) //promise reurned from fetch is stored in response
    let data = await response.json() //convering to json is an asynchronous task so await
    console.log(data);
    outputa.textContent = JSON.stringify(data , null , 2)
    outputa.textContent += "REQUEST SENT"
    
    return 42
        
}
let ret2 = getUser2()
console.log(ret2);
