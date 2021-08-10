//Reflect object in JS
// Reflect Object - built-in object that provides methods for interceptable JavaScript operations
// All methods are static
// has no constructor so we  cannot use `new` with reflect object
//generally use with proxies


let alex = {
    name : "alex",
    id : 93,
    hello : function(a,b) {
        console.log(`Hello my name is ${this.name}. ${a} ${b}`);
    }
}

//Reflect.ownKeys:-returns all keys owned by alex

let a1 =Reflect.ownKeys(alex) //Reflect.ownKeys takes an object as it's parameter
console.log("key using Reflect.ownKeys", a1); //logs the keys

//Reflect.get(objName , "keyname") :- get the value for the key in that obj
let a2 = Reflect.get(alex,"name")
console.log("value of key using Reflect.get()", a2);

//Change the value of "name" key using Reflect.get()
//syntax : Reflect.set(objName, "keyname" , new value)
let a3 = Reflect.set(alex, "name" , "Uttam")
console.log("Change the value of name key using Reflect.get()",a3); //logs true as the process of setting the value is a success
let a4 = Reflect.get(alex,"name")
console.log("Change the value of name key using Reflect.get()",a4);


//Reflect.has(obj , "keyName") :- Check for one specific key in obj
let a5 = Reflect.has(alex, "hello")//logs boolean
console.log("check if a key is present in obj", a5);//true

//Reflect.deleteProperty(obj , "keyName") :- delete a key in obj
let a6 = Reflect.deleteProperty(alex, "id")
console.log("after Reflect.delete()" , alex); //id deleted
Reflect.set(alex, "id", 93) //id created and value added
console.log("obj alex",alex);

//Reflect.apply(functionName within Obj, this context, argumentList for function)
Reflect.apply(alex.hello, alex, Reflect.ownKeys(alex)) //Reflect.ownKeys(alex) returns all the keys
//calls the function alex.hello

//Reflect.defineProperty(objName , "key" , {descriptotors including value})
//defines a new key for the obj

Reflect.defineProperty(alex, "age", {value:30, enumerable:false,})
console.log(alex.age);


//Reflect object syntax types
/**
Reflect.apply(targetFunc, thisArg, argList); //for functions
Reflect.get(target, key, handler); //handler is Proxy. get the value of a property
Reflect.set(target, key, value, handler); //handler is Proxy. set the value of a property
Reflect.has(target, key); // check if it has a property
Reflect.delete(target, key); //like the delete operator
Reflect.ownKeys(target); // enumerate through the properties
Reflect.defineProperty(target, key, {propertyDescriptor}); //like Object.defineProperty
 */