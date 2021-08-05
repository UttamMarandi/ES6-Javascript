//Async iterators for big data sets

//https://jsonplaceholder.typicode.com/posts
//retrieves 100 records
//let's pretend that there are millions of records

//create an empty object
let posts = {}

//add custom iterator to it

posts[Symbol.iterator] = function() {
    const URL = "//jsonplaceholder.typicode.com/posts";
    return {
        next : async function() { //async b.c we don't want the next .next() call to happen until the last is resolved. B.c we want to perform some operation on the real data i.e retrieved.
            let rand = Math.random()
            console.log(rand);
            if(rand > 0.7){
                return {value : undefined, done: true}
            }
            //above code is only to stop the .next() calls

            //create request object
            let req = new Request(URL+`?r=${rand}`, {
                method : "GET",
                mode : "cors"
            })
            //fetch req

            let response = await fetch(req) //asynchronous code
            //response stores the data and not a promise
            let data = await response.json()
            console.log("array of posts fetched", data);
            return {
                value : data , done : false
            }

        }
    }
}

let output = document.getElementById("output")
let main = document.querySelector(".post-btn")

main.addEventListener("click" , d)

function d(ev) {
    
    let iterator = posts[Symbol.iterator](); //posts is the object up above. the coustom iterator is now stored in iterator variable
    // console.log(iterator); //code doesn't work if I don't add this, no idea why
    //okk ..need to add semicolon on line 49, I think it can't differntiate the end of line as next line as an IIFY

    //we cannot use for of loop b.c it sends the next next() without earlier next() having resolved. So we need to call the .next() in an asynchronous way

    //IIFY :- Immediatly invoked function expression
    (async function getData(){
        let data = await (iterator.next()) //the flow halts until we get data from iterator.next

        if(data.value && !data.done){ //if data is not undefined and done is false , do following
            output.textContent += "\r\n" + data.value
            console.log("data received", data.value);
            setTimeout(getData,2000) //recursive function..function call itself , after certain period

        }
        else { //if it data.done is true means that .next() has stopped 
            console.log("done" , data.done);
            output.textContent += "\r\n" + data.done
        }
    })();
}

