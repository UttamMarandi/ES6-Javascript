//Custom Object methods , getters and setters

//OLD WAY
let obj = {
    prop1 : 1979,
    prop2 : "Alien",
    prop3 : function(){ //this function is a method of obj

    }
}
console.log("prop1 :", obj.prop1);
//change values of prop
obj.prop1 = 1980
console.log("prop1 :", obj.prop1);

//NEW WAY
console.log("NEW WAY");
let x = 7
let obj2 = {
    prop1 : 1979,
    get prop4(){ //getters 
        console.log("this within prop4 getter",this); //here this refers to the parent element i.e obj2 (lexical scope //I think)
        return this.prop1
    
    },

    set prop4(val){
        console.log("this within prop4 setter",this);
        this.prop1 = val
        console.log("prop1 within setter",this.prop1);
    },
    prop2 : "Alien",
    x, //value of x is defined outside of obj , but still we can access it inside object. x here acts as a key to value 7
    prop3(){ //new ES6 syntax
        console.log("new way");
    }
}
//call function inside obj2
console.log("new ES6 syntax", obj2.prop3());//logs undefined ...I don't know why
obj2.prop3()
console.log("value defined outside : ",obj2.x);

console.log("method to get a prop ", obj2.prop4) //prop 4 is not a function it's a getter

//GETTERS
//getters is a good way to increase the privacy of your important data. user will never get to access dierectly the data , but use get functions to access them: data encapsulation , function is public but key:value is private

//SETTERS
//setters set the value of the private key . 
//setters and getter for the same key should have same name
//setters takes the value passed as it's parameter
obj2.prop4 = 2000

console.log(obj2.prop1);