//Optional Chaining in JS ES2020
//mozilla statement
//The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.
//The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.

//it allows for checking the existence of code

//for example if we have an object within an object 

let obj1 = {
    prop1 : {
        prop2 : "text"
    }
}

//if we want to access text , then 
if(obj1.prop1 && obj1.prop1.prop2){ //we have to explicitly check wether prop1 exists within obj1 or not and then only we can check for obj1.prop1.prop2
    console.log("normal access=>",obj1.prop1.prop2 );
}

//the same can be achieved using optional chaining
let text = obj1.prop1 ?. prop2 //optional chaining first checks if obj.prop1 exisits or not and then only checks for prop2. If the key does'nt exist in any element of chain then it returns undefined
console.log("optional chain =>", text);

//PRACTICAL

const dataArr = [
    {label : "ONE"},
    {label : "TWO"},
    {label : "THREE"},
    {label : "FOUR"},
    {label : "FIVE"},
]

const dataObj = {
    4 : {label : "I am Number Four"},
    7 : {label : "What's in the box"},
    m : () => {
        console.log("custom method");
    },
    top : {mid : {deep:123}}
}

//event listener on body to listen for clicks


// add para on click
const addPara = (num, hex) => {
    // let txt = 'default';
   
    let txt = dataArr[num - 1]?.label;
    txt = dataObj[num]?.label;
    if (txt) {
      let p = document.createElement('p');
      p.style.backgroundColor = hex; //8 digit hex
      p.id = `_${num}`; // _4, _5, _6, _7
      p.textContent = txt;
      document.body.appendChild(p);
    }
    console.log(dataObj?.top?.mid?.deep); //logs 123
    console.log(dataObj?.toplabel?.mid?.deep);//logs undefined as toplabel is not present as key for dataObj
    //if (dataObj && dataObj.top && dataObj.top.mid && dataObj.top.mid.deep) {
    //}
    dataObj.m?.();
    dataObj.f?.();
  };


const randColor = () => {
    let clr = Math.floor(Math.random() * Math.pow(2, 24));
    let red = (clr >> 16).toString(16).padStart(2, '0');
    let green = ((clr >> 8) & 255).toString(16).padStart(2, '0');
    let blue = (clr & 255).toString(16).padStart(2, '0');
    let alpha = Math.floor(Math.random() * 200 + 55)
      .toString(16)
      .padStart(2, '0'); //alpha is a value 0-100% but written as num 0-255
    // and in hex that means 00 - FF. 50% is 128 in decimal or 80 in Hex
    // https://codepen.io/chriscoyier/pen/XjbzAW - ref chart for percentages
    //console.log(red, green, blue, alpha);
    return `#${red}${green}${blue}${alpha}`;
  };

  document.addEventListener("DOMContentLoaded", ()=>{
    document.body.addEventListener("click", handleClick)
})

handleClick = (ev) => {
    //genrate random num between 1 & 7
    const num = Math.floor(Math.random()*7) + 1
    //concat _ to rand
    let id = "_".concat(num)
    let hex = randColor() //randColor() generates hex color
    console.log(id , hex);
    let div = document.getElementById(id);

    div ? (div.style.backgroundColor = hex) : addPara(num, hex); // or void 0
    
}