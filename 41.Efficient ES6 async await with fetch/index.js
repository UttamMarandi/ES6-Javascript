//Efficient ES6 async await with fetch
(async function f(){//IIFY
    let badUrl = "https://"
    let goodUrl = "http://jsonplaceholder.typicode.com/users";

    let url = Math.round(Math.random()) ? badUrl : goodUrl
    //Math.round() returns the value of a number rounded to the nearest integer
    //so here it return either 0 or 1

    // let data = await fetch(url)
    // data = await data.json()

    //the above code can be written as following
    let data = await (await fetch(url).catch(handleErr)).json()
    //first we are waiting for the fetch to complete which gives the response object. This response object is then passed to .json() for conversion. This is also awaited

    if (data.code && data.code === 400) { //if we are receiveing data.code i.e true and if it is equal to 400 , the status code we mentioned in handleErr , then return nothing. Means if the above code fails , no error is shown in console
        return
    }
    console.log(data);
  
})()

function handleErr() {
    console.log(err);
    //even though we log the error , after triggering .catch() , still handleErr returns undefined which is then passed as response object to .json() which causes error
    //so we need to create our own response object and stringify it so that .json can read the returned response object
    let resp = new Response(JSON.stringify({
        code : 400,
        message : "Newtwork error"
    }))
    return resp;
}