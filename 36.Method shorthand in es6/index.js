//Method shorthand in ES6

let obj = {
    prop1 : 123,
    prop2 : "abc",
    prop3 : true,
    prop4 : function () {
        console.log(obj);
        console.log(this);
    },
    prop5 : () =>{
        console.log(obj);
        console.log(this);
    },
    prop6() { //mrhtod shorthand for object
        console.log(obj);
        console.log(this);
    } 
}
obj.prop4()
obj.prop5() //logs winodow for "this" as it is an arrow function 
obj.prop6()