//Intro to Javascript classes
//javascript is not a class based language (OOP) but a prototype based language
//so while implementing classes , javascript still uses classes

//keywords
//class
//extends
//constructor
//super
//get
//set
//static

class Vechile { //class name starts with a capital letter (convention)
    constructor(_wheels){ 
        this.numWheels = _wheels
    } 
    get wheels(){ //get works as getter //optional..no need to access or modify the variable
        return this.numWheels; //this represent the object that is created using new keyword and this.numWheels is the property of that object
    }
    set wheels(_wheels){ //set works as setter
        this.numWheels = _wheels;
    }
    static accelerate(){ //static methods are shared to every instance of class
        console.log('go faster');
    }
    static decelerate(){
        console.log('go slower');
    }
    justAMethod(){ //no need to use the keyword function in front of it
        //like a function
    }
}

let car = new Vechile(4)
let car1 = new Vechile(2)
let car2 = new Vechile(6)
console.log(car.wheels); //logs 4
car.wheels = 8 //similar to set
console.log(car.wheels); //similar to get
Vechile.accelerate() //all car share the static function .accelrate() . So Vechile.accelarate() can be used for any car

class Car extends Vechile { //Inheritance : Vechile is a parent of Car
    //all the properties of Car can be extended by Vechile
    constructor (_wheels,_maker, _model) {
        super(_wheels) //super() is a reference to the constructor of parent class.
        //It is mandatory to call super() withinn constructor of derived class
        this.maker = _maker
        this.model = _model
    }
    info() {
        console.log(`The ${this.model} of ${this.maker} is given a rating of ${this.wheels}`); 
        Car.accelerate() //static
        //can access .wheels b.c we extend the Vechile class
    }

}

let ferrari = new Car(10,"Ferrair", "Mustang") //new means call the constructor that is present in the class
console.log(ferrari.wheels);
ferrari.info()

Car.accelerate()