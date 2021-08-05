//Custom Iterators and for of loops

//for ...of loop with custom iterators

let myObj = {
    prop1 : 123,
    prop2 : "bob",
    prop3 : true
}

// for (item of myObj) {
//     // console.log(item); //Error : for of loop is not iterable
// }
//it's because object do not have built in iterators

//Add an iterator to myObj
myObj[Symbol.iterator] = function() { //Symbol.iterator is like a key of myObj that takes a function which returns a oject containing custom iterator
    let counter = -1
    return {
        next : function() { //custom iterator has one function .next() that needs to be defined
            // return {value : undefined , done : false}
            counter++
            switch(counter){
                case 0:
                    return {value : myObj.prop1, done : false}
                case 1:
                    return {value : myObj.prop2, done : false}
                case 2:
                    return {value : myObj.prop3, done : false}
                default:
                    return {value : undefined, done : true}
            }
        }
        //now when for of loop runs ..it calls .next() which passes a value and a "done" property which checks if the iteration needs to stop. if done : true , then for of loop stops iteration
    }

}

let iter = myObj[Symbol.iterator]() //it will give iter everyhing within return
console.log(iter.next()); //everytime iter.next is called ..counter value increases which in turn logs the next case content
console.log(iter.next());

//hence it work as an iterator for an object
//as now we have an iterator for the boject we can use for of loop

for(item of myObj) {
    console.log("for of for object",item);
}