//Converting callback functions to Promises

//USING CALLBACK FUNCITONS
// import { delay } from './utils.cb.js';

// document.addEventListener('DOMContentLoaded', () => {
//     //HTML has loaded, add click listener
//     document.getElementById('btnDelay').addEventListener('click', wait);
//   });



// const changeBtnColor = () => {
// let color = `#${Math.random().toString(16).substr(2, 6)}`;
// let element = document.getElementById('btnDelay');
// element.style.backgroundColor = color;
// console.log(`Button is now ${color}`);
// return Math.floor(Math.random() * 4) + 1;

// };

// const wait = (ev) => { //ev is the event object
//     //callback version
    
//     let delay1= 3;
    
//         delay(() =>{
//             console.log("test");
//             let delay2 = changeBtnColor()
//             delay(()=> {
//                 let delay3 = changeBtnColor()
//                 delay(()=> {
//                     let delay4 = changeBtnColor()
//                 },delay3)
//             },delay2)
//         },delay1)
      

    
    
//     //change the button color after delay
// }

//the problem with above code is that if want to execute funciton in a sequence one after another than we need to do some complex nesting. This is called callback hell

//USING PROMISES
//UNCOMMENT CALLBACK AND COMMENT THIS ONE TO CHECK ABOVE CODE
import { delay } from './utils.p.js';

document.addEventListener('DOMContentLoaded', () => {
    //HTML has loaded, add click listener
    document.getElementById('btnDelay').addEventListener('click', wait);
  });



const changeBtnColor = () => {
let color = `#${Math.random().toString(16).substr(2, 6)}`;
let element = document.getElementById('btnDelay');
element.style.backgroundColor = color;
console.log(`Button is now ${color}`);
return Math.floor(Math.random() * 4) + 1;

};

//Use promise instead of callback hell
const wait = (ev) => { //ev is the event object
    //callback version
    
    let delay1= 3;
    
    delay(delay1)
    .then(()=>changeBtnColor()) //we can now chain using .then
    .then(()=> delay()) //we need to call delay again to get the random value for dealy
    .then(()=>changeBtnColor())
    .then(() => delay())
    .then(() => changeBtnColor())
    .catch((err)=> {
        console.log("error");
    })
    

    
    
    //change the button color after delay
}