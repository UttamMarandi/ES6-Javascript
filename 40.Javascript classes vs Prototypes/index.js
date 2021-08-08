// Javascript classes vs prototypes

// javascript is not a class based language , it is a prototype based language .
//still we can define classes but in the background it's a prototype based implementation


class PersonC {
    constructor(nm , id) {
        this.name = nm,
        this.id = id
    }
    details() {
        console.log(`${this.name} :: ${this.id}`);
    }
}

let bob = new PersonC("Uttam", "68")
bob.details()
console.log("bob object" , bob);

//extend PersocC to EmployeeC

let EmployeeC = class extends PersonC {
    constructor(nm , id, salary) {
        super(nm, id)
        this.salary = salary
    }
    details() {
        console.log(`${this.name} :: ${this.id} :: ${this.salary}`);
    }
} 

let bubba = new EmployeeC("Bubba" , "34", "4500") //bubba is an instance of EmployeeC
bubba.details()

//convert above class based code to prototype based
console.log("convert above class based code to prototype based");

//create a prototype PersonC
let PersonP = function(nm, id) { //same as constructor
    this.name = nm,
    this.id = id
}

PersonP.prototype.details = function(){ //same as details() in PersonC 
    console.log(`${this.name} :: ${this.id}`);
}

let fred = new PersonP("Tommy" , 35) //whenever new keyword is used in js , it means call the function as it's constructor

fred.details()

//extend EmplyoeeP
let EmplyoeeP = function(nm, id, salary) {
    PersonP.call(this, nm, id) //we don't have super() in protype. what we can do is call PersonP.call() method. .call() method takes the context parameter "this" as its first parameter. "this" refers to the object that triggers PersonP() method
    this.salary =salary

}

//extends PersonP to EmployeeP in prototype
Object.setPrototypeOf(EmplyoeeP , PersonP.prototype) //same as extends 

EmplyoeeP.prototype.empDetails= function() {
    console.log(`${this.name} :: ${this.id} :: ${this.salary}`);
}


let dam = new EmplyoeeP("Dam" , "45", 2957329)
dam.empDetails()

//the both result in exact same code