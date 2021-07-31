//Javascript fetch with request and header objects

//fetch using a Request and Headers objects
//using jsonplaceholder for the data

const uri = 'http://jsonplaceholder.typicode.com/users';

//REQUEST OBJECT
//syntax / types
//a. new Request(uri) //basically works as a simple .ftech(req).then()
//b. new Request(uri , option) //option is a object the can take properties
//option : method , headers , body, mode
//method : GET , POST , PUT , DELETE , OPTIONS

//few imp methods
//GET is automatically cached , you will get the same data unless something is changed
//POST is to update something to the server
//PUT is to give new data to the server
//DELETE is to delete data from the server
//OPTIONS is to send headers so that server can know the context

//HEADERS

//We can check request and Response headers in Inspect -> Networks tab
//headers option allow us to manipulate request headers

//BODY
//if we are sending something to the server , body will be used (doubt)

//MODE - define policy for data use(I think),
//cors - cross origin resource sharing , basically means if you are present in one domain, can you access data from another domain


//HEADERS OBJECT
//new Headers()
// headers.append(name, value)
// -> These are the request headers that we are allowed to modify :     ->Content-Type, Content-Length, Accept, Accept-Language,
// X-Requested-With, User-Agent

//When uploading a file to the server , we use POSt or PUT method , there will be a body option in request and we can also use Content type and Content length request headers


let h = new Headers()
h.append("Accept" , "application/json") //Accept is a key in Request readers that specifies what type of file we want to fetch. We mentioned here to get json file only
//.append() will add header to the headers object when it is sent to server
//.set() is used to update header if already present in headers object

//use options in request
let req = new Request(uri , {
    method : "POST",
    headers : h, //h defined above
    mode : "cors" //cors -> cross origin resource sharing

})

fetch(req)
    .then(response =>{
        if(response.ok){ //response.ok() returns a value between 200 -299 , if reponse is successful. also 304 works as 304 means no data changed
            return response.json()
        }
        else{
            throw new Error ('BADD HTTP')
        }
    })
    .then(jsonData => {
        console.log(jsonData);
    })
    .catch(err => {
        console.log("Error", err.message);
    })

    //fetch logs the data in console. Also we check Network tab and click on users file to find the "accept" Reqest header value has changed to our specified value

    //HTTP
    //200 means the request has succeeded
    //201 means something new is created //duing method "POST"
    //304 means cached file is sent again, no change in files