//Use Promises.all() to load multiple files

//dynamically load css files
//check if all css files are loaded ...don't do anything until the files are loaded

const url1 = "./big-font.css"
const url2 = "./color-font.css"

//code refactored later
// let link = document.createElement("link")
// link.setAttribute("rel","stylesheet")
// link.setAttribute("type","text/css")

// link.addEventListener("load", function(ev){
//     console.log("stylesheet loaded");
// })
// link.addEventListener("error", function(err){
//     console.warn("Your css is ready not");
// })
// link.href = url1

// //the above does not works b.c the stylesheet has to be loaded in the head tag.
// //for images or other files it works ,b.c it is loaded in body

// //append to head
// document.head.appendChild(link) //now works


//we are in a situation where we want two css files to load and the webpage should do nothing until it's loaded
//so , we wrap both the code snippet from creating link to appending to head for both the stylesheet within separate promise
//then we call proomise.all to check that both promises are resolved

let p1 = new Promise(function(resolve, reject){
    let link = document.createElement("link")
    link.setAttribute("rel","stylesheet")
    link.setAttribute("type","text/css")

    link.addEventListener("load", function(ev){
        console.log("stylesheet loaded");
        resolve(link) //if load is successful run resolve
    })
    link.addEventListener("error", function(err){
        console.warn("Your css is ready not");
        reject(err) //if load not successful , run reject
    })
    link.href = url1

    //the above does not works b.c the stylesheet has to be loaded in the head tag.
    //for images or other files it works ,b.c it is loaded in body

    //append to head
    document.head.appendChild(link) //now works
})

let p2 = new Promise((resolve,reject) => {
    let link = document.createElement("link")
    link.setAttribute("rel","stylesheet")
    link.setAttribute("type","text/css")

    link.addEventListener("load", function(ev){
        console.log("stylesheet loaded");
        resolve(link) //if load is successful run resolve
    })
    link.addEventListener("error", function(err){
        console.warn("Your css is ready not");
        reject(err) //if load not successful , run reject
    })
    link.href = url2

    //the above does not works b.c the stylesheet has to be loaded in the head tag.
    //for images or other files it works ,b.c it is loaded in body

    //append to head
    document.head.appendChild(link) //now works
})

//use promise.all

Promise.all([p1,p2])
    .then(result => {
        console.log("both the css has been loaded");
    })
    .catch(err => {
        console.log("Error", err.message);
    })