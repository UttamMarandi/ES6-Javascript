//How to abort a fetch request
//Sometimes when the fetch is taking long , or the user has changed it's mind we want to stop the fecth from happening
//To abort fetch() we use AbortControllers

const url = `https://jsonplaceholder.typicode.com/posts`;

//click 

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("btnStart").addEventListener("click", getData)
})

//AbortControllers
const fetchController = new AbortController()
//create a new fetchController

//fetch
function getData() {
    
    const {signal} = fetchController //use of destructuring ..I have no idea
    //we need to pass {signal} to fetch so that we can use abort() within fetch
    let lag = setTimeout(()=> {
        fetchController.abort() //call fetchController.abort() after 5s
        console.log("aborted after 1s");
    },1000)


    fetch(url , {signal})
    .then(response => response.json())
    .then(data => {
        clearTimeout(lag) //if we get the data we don't want the .abort() method to run
        //so use clearTimeout
        console.log("we get the data from json placeholded",data);
    })
    .catch(err => {
        console.warn({err});
    })
}


