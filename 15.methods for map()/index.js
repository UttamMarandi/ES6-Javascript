//Methods for map()
// .get(key)  //access value for the key
//.set(k, v) //set key : value pair
//.clear() //clear empties the entire map
//.delete(key) //you can delete value for that particular key  
//.has(key)  //whether or not key exists returns boolean
// .forEach(func) //traverse through the map
// .size property //returns the size of map

let star = new Map()
star.set("Luke", "mark Hammel") //entries
star.set("man", 'Harrison ford')

star.forEach(function(value, key){
    console.log(`${key} : ${value}`);
})
console.log("star map", star);

//.get()
let h = star.get("Luke")
console.log("using .get()",h);

//.delete()
star.delete("man")
console.log("han after .delete() :",star.get("man")); //returns undefined as we deleted the value

//.clear()
// star.clear()
// console.log("star map after clear",star); //logs empty map

//.has()
if(star.has("Luke")){
    console.log("Luke is present as a key in star");
}

let size = star.size
console.log("size of star", size); //we have two entries but "man" is deleted so logs 1