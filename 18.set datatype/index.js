//set datatype in javascript
//set is array like structure that enforces uniqueness..meaning every element in set is unique
//also we use add() and remove() methods to add or remove elements from array
//few methods of set
//1. add(element) // add element to set
//2. delete(element) //remove element from set
//3. has() //checks whether an element is present  or not , returns boolean
//4. clear()
//5. forEach()
//6. entries()
//7. size

let s = new Set()
s.add(23)
s.add("Uttam")
s.add(true)
s.add([24,25,"Tommy"])
//enforces uniquness
console.log("size of s",s.size); //4
s.add(38)
s.add(38)
s.add(38)
s.add(38)
s.add(38)
s.add(38)

console.log("size of s",s.size); //5
 
s.forEach(function(item){
    console.log("item in s",item); //logs each item in the order they were added
    //only one 38 is looged, 
})

//.has()
console.log(s.has("Uttam")); //returns true

//.delete(element)
console.log(typeof s); //logs object ...intresting

s.delete("Uttam")
console.log("set s after delete", s);

console.log("size of s",s.size);