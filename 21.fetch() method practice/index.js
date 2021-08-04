//fetch() method practice

let url = "http://jsonplaceholder.typicode.com/comments?postId=42";

//setting headers
let h = new Headers()
h.append("Accept", "application/json")

let req = new Request(url , {
    headers : h,
    method : "GET",
    mode : "cors"
})

fetch(req)
    .then(response => response.json())
    .then(data => JSON.stringify(data , null , "\t"))
    .then(data => {
        console.log(data);
        let output = document.getElementById("output")
        output.textContent = data
    })
    .catch(err => {
        let nm = err.name
        let msg = err.msj
        alert(`error ${nm} ${msg}`);
    })