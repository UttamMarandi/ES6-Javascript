//Understanding this
//this is reference to the context where a function is called
//lexical scope : where you declare the variable makes a difference ex- variavle declared within function has scope local to the function
//this keyword do not follow lexical scope : this within lexical scope always checks where was the parent declared
//also arrow functions and normal functions interpret "this" keyword differently
let box = document.querySelector(".box")

let myFunc = function(){
    let x = 8 //local scope or block scope
    console.log("this 1st", this); 
    //this keyword is pointing to the element div on which we clicked
    //"this" basically refers to the element who triggered the function for normal function
    //in this case "box"
}

let myFunc2 = () => {
    console.log("this 2nd", this);
    //for arrow function , "this" gets the lexical scoped version of it instead of context. "this" looks to it's parent... in this case myFunc2 and checks where myFunc2 is decloared
    //hence it logs the window object
}

box.addEventListener("mousedown", myFunc)
box.addEventListener("mouseup", myFunc2)

myFunc() //this logs the window object b.c what triggered the function, it's the window object
//but when we click and call myFunc then this represent "box" element

//call() and provide context using .call(parameter)
//call() explicitly defines the window object
myFunc.call(window) //this logs window as we passed window as parameter
myFunc.call(box) //this logs box as we passed box as parameter