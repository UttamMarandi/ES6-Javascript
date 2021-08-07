//Creating objects in JS

/****************************************
Creating Objects
1. Object literals
2. Object.create() with descriptors
3. function + new
4. factory function with closures
5. JS Class
****************************************/

//1.Object literls

let obj1 = {
    prop1 : "value1",
    prop2 : "value2",
    prop3 : function () {
        console.log(this.prop1); //this is reference to the instance of the obj1
    }
}

console.log("1.Object Literals");
console.log("prop1",obj1);
console.log(obj1.prop1);
obj1.prop3()

//for small data , creating object using object literals is fine , but for large data it is not feasible

//2.Object.create
console.log("2.Object.create() -> use proto");
//Object.create takes two parameters , 1. external object : - to define anything outside the object. 
//2. keys..which also take an object containing descriptors namely writable - able to write /modify the value , enumerable- able to access the value , configurable - able to configure it's descriptors, value - value for the key

let proto = {
    prop3: function () {
        console.log(this.prop1); //this refers to the obj which triggers proto
    }
}
let obj2 = Object.create(proto, {
    prop1 : {
        writable : true,
        enumerable : true,
        configurable : true,
        value : "value1"
    },
    prop2 : {
        writable : true,
        enumerable : false,
        configurable : true,
        value : "value2"
    }

})
console.log("obj2",obj2);

//empty object for proto but defining the funciton outside
console.log("2.Object.create() -> use empty object for proto");

let obj3 = Object.create({}, {
    prop1 : {
        writable : true,
        enumerable : true,
        configurable : true,
        value : "value1"
    },
    prop2 : {
        writable : true,
        enumerable : false,
        configurable : true,
        value : "value2"
    },
    prop4 : {
        writable : true,
        enumerable : true,
        configurable : true,
        value : function(){ //funciton as value
            console.log(this.prop2);
        }
    }
   
})
obj3.prop3 = function() {
    console.log(this.prop1);
}
console.log("Obj3-empty object for proto",obj3);

//3.new + funciton

let Obj = function(v1 , v2) { //this funciton acts as a constructor that creates the object
    this.prop1 = v1
    this.prop2 = v2
    this.prop3 = function(){
        console.log(this.prop1);
    }
}

let obj4 = new Obj("value1", "value2")
console.log("Obj4 using new + function",obj4);

//very useful for reusablity

//4.factory function with closures

let ObjF = function(v1,v2){
    let _prop1 = v1 //storing the passed
    let _prop2 = v2

    return { //we need to explicitly return an object for this to work
        prop1 : _prop1,
        prop2 : _prop2,
        prop3 : function(){
            console.log(_prop1);
        }

    }
}

let obj6 = ObjF("value1","value2") //no need of new keyword

console.log("obj6 -> factory function", obj6);

//5 JS classes

class ObjC{
    constructor(v1 , v2) {
        this.prop1 = v1
        this.prop2 = v2
    }
    prop3() {
        console.log(this.prop1);
    }
}

let obj7 = new ObjC("value1" , "value2")
console.log("Obj7 using JS classes", obj7);
obj7.prop3()