//Why should I use const

//both let and const has block level scope
//varaible declared with const cannot be changed.

const log = console.log()
//now log cannot be changed using assigment 

const obj = {
    a : 123
}

// obj = [123] //wrong
//but
obj.a = "456"//modifying existing property
obj.b = "hello" //adding new property
delete obj.a //deleting property
//all are possible

console.log("obj after modification",obj);

const f = function() { //this function cannot be changed when used by others

}

//so const give protection to your code while sharing code with others

//any varaible that is set up as const cannot be changed, so if a varibale , or array or object do change in your code use const instead of let.
//this will show other developers working on the project that this variable do not change
