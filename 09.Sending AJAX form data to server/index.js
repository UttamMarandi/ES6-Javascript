//Sending AJAX form data to the server using fetch

//Sending Data to the Server using Fetch()
//using jsonplaceholder for the data
//GET - queryStrings
// http://jsonplaceholder.typicode.com/posts?userId=1&postId=65
// http://jsonplaceholder.typicode.com/todos?userId=2
//POST
// http://jsonplaceholder.typicode.com/posts  

// queryStrings is something that allows us to filter data during search.
//starts with ? mark
//so , we need to able to send this queryStrings to fetch the right data, we use GET method for this purpose
//GET method is used to send queryStrings
//POST method is used to send formData , buffer array or any other file

let root = 'http://jsonplaceholder.typicode.com/';
let rand = Math.floor(Math.random() * 10)
root = root + "posts?userId=" + rand

let options = {
    method : "GET"
}

let req = new Request(root , options)

fetch(req)
    .then(function(response){
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error("Invalid HTTP")
        }
    })
    .then(function(data){
        console.log(data);
        data = JSON.stringify(data)
        let output = document.getElementById("output")
        output.textContent = data
    })
    .catch(function(err){
        console.log("Error" , err.message);
    })

//we can check the posts data that is received from "http://jsonplaceholder.typicode.com" in Inspect -> networks tab

//USE POST METHOD
//if we are sending data to the server we need to define a body key in options object
//an HTTP request or on HTTP response is made of headers and the body. The body specifies the actual file i.e being sent or received
//We can check headers and body in Inspect -> Network and click on any received file. Headers shows all the headers , and Response shows the body
//POST method allows us to attach a body

//SEND FORMDATA USING POST METHOD
let s_options = {
    method : "POST",
    mode : "cors",
    body : "formdata" //specifying the varibale that needs to be send
}
//create formdata
let formdata = new FormData()
formdata.append("userId", 3)
formdata.append("title" , "Uttam Marandi")
formdata.append("body", "This is the body text")

let s_req = new Request(root , s_options)

fetch(s_req)
    .then(function(response){
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error("Invalid HTTP")
        }
    })
    .then(function(data){
        console.log(data);
        data = JSON.stringify(data)
        let output = document.getElementById("output")
        output.textContent = data
    })
    .catch(function(err){
        console.log("Error" , err.message);
    })
