// nullish coalescing operator is a new logical operator in JS

let result = null ? "yes" : "no"
console.log(result);

//nullish coalescing operator searches for either null or undefined values
//undefined is a variable which is not declared or something which does not exist in DOM and you are searching for it so JS returns undefined
//null is an intentianl declared value which shows emptiness

let result2 = null ?? "yes" //log "yes" if testing values is null or undefined
console.log(result2);

let current

function f() {
    let result = current ?? getNum() //getNum() runs only when current is null or undefined
    console.log(result);
}
console.log(current);
getNum()
console.log(current);
f()
f()
f()

function getNum() {
    current = Math.floor(Math.random() *100)
    return current
}