// Default Function Parameters
// new ES6 feature allowing us to provide
//default values for function parameters
//defualt function parameters are values assigned to paremeters within function defination

function sendMessage(email, title, message) {
    if(!email || !title){
        return false
    }

    console.log("email" , email);
    console.log("title", title);
    console.log("message",message); //message is undefined b.c no value is provided to it

    return true
}

//call the function
sendMessage("tommy@gmail.com", 'The dead man', )

//message with deafult parameters
console.log("message with deafult parameters");


function sendMessageM(email, title, message="hello there") { //default parameter
    if(!email || !title){
        return false
    }

    console.log("email" , email);
    console.log("title", title);
    console.log("message",message); //message is undefined b.c no value is provided to it

    return true
}
sendMessageM("tommy@gmail.com", 'The dead man', ) //the default value for message is logged