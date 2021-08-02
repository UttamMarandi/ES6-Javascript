//Javacript fetch method for AJAX

//basic fetch
//using jsonplaceholder for the data
//Remember that fetch returns a promise


//get the details for a random user
const root = 'http://jsonplaceholder.typicode.com';
let id = Math.floor(Math.random() * 20) + 1;  //id 1 to 20
let uri = root + '/users/' + id;

console.log('FETCH: ', uri);
//any user id higher than 10 will generate a 404 error

//fetch a file (here : a file conatining json data) from uri i.e given url and then run a function in .then() if sucessful. if not then run the function within .catch()
fetch(uri)
    .then(function(response){ //response is the actual JSON data which is fecthed
        if(response.status === 200) { //meaning fetch is successful
            return response.json() //we don't know what type of file is fecthed. so we try to covert the response file to json data using response.json()
            //also respons.json() is returned , so that it can be used in the next .then()
        }
        else{
            throw new Error ("Invalid user ID") //this error message is passed to the .catch() if .catch() is executed
        }
      
    })
    .then(function(data){
        console.log(data); //data is same as response.json() //object version
        //display the data in ui
        data = JSON.stringify(data) 
        console.log(data); //string version
        let output = document.getElementById("output")
        output.textContent = data
    })
    .catch(function(err){ //callback function of catch() has err object which we declared at throw statement
        console.log("Error", err.message); //message is defualy property

    })