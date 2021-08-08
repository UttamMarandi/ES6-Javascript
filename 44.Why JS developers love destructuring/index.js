//Why Destructuring is awesome

let person = {
    id: 123,
    name: "Leslie",
    dob: new Date("1985-01-01").valueOf(),
    age: 44,
    salary: 55000,
    department: "Parks and Recreation",
    hometown: "Pawnee"
}

//take first three keys of person and convert it to JSON string to store it on local storage

savePersonES5(person)

function savePersonES5(someObj) {
    let id = Date.now() //we have no idea that the object passed will have id as a key,so we set it to some default value , but if it exists than we set it to object id
    if(someObj.id) {
        id = someObj.id
    }
    let name = someObj.name
    if(!name) { //if name is undefined i.e someObject.name does not exist
        name = "blank"
    }

    //using ternary operator
    let dob = someObj.dob ? someObj.dob : new Date("2010-02-01").valueOf()

    const key = "someRandomUniqueString"
    let jsonStr = JSON.stringify({
        id : id,
        name : name,
        dob : dob
    })
    localStorage.setItem(KEY, jsonStr)
}

//ABOVE CODE in ES6
function savePersonES6({id = Date.now() , name = "blank", dob = new Date("2001-02-01").valueOf()}){
    //no matter the object that is passed in we take only these three properties from it.
    //the assigment value are default values if there exist no such key in passed object

    const key = "someRandomUniqueString"
    let jsonStr = JSON.stringify({id,name,dob})
    //if key and the value that is assigned to it have the same name , than we can use above shorthand
    localStorage.setItem(KEY , jsonStr)

}
