//Dynamic Module imports in js

// import { colour } from "./util";

//import { default as rand, colour } from './utils.js';

//CODE1

// document.addEventListener('DOMContentLoaded', () => {
//     let main = document.querySelector('main')
    
//     import("./util.js")
//     .then(({default : rand}) =>{
//         console.log("test");
//         let pn = document.createElement('p');
//         console.log(pn);
//         let today = new Date().getDate();
//         console.log(pn);
//         pn.textContent = `Today's number is ${rand(today)}.`;
//         console.log(pn);
//         main.append(pn)
        
//     }) //default object is getting imported , name changed from default to import
//     .catch((err)=>{
//         console.log("failed to load rand function");
//     })

//    //dynamic import for multiple files
//    import("./util.js").then(({colour})=>{
//     let pc = document.createElement('p');
//     let c = colour()
//     console.log(c);
//     pc.style.color = c
//     pc.textContent = `Today's colour is ${c}`;
//     main.append(pc)
//    }).catch((err)=>{
//        console.log("failed to load colour function");
//    })
    
// })

//In the above code the order in which rand and color method are imported is not fixed. This is b.c these are promises and the way they are resolved is not fixed.import() is also a promise

//what we can do is use import() once and imprt both method in the same import(). PS- they need to be in the same file

//CODE 2\
const ADDNUM = true

if(ADDNUM){
    document.addEventListener('DOMContentLoaded', () => {
        let main = document.querySelector('main')
        
        import("./util.js")
        .then(({default : rand , colour}) =>{
            console.log("test");
            let pn = document.createElement('p');
            console.log(pn);
            let today = new Date().getDate();
            console.log(pn);
            pn.textContent = `Today's number is ${rand(today)}.`;
            console.log(pn);
            main.append(pn)
    
            //refactor code:- move color import code her
            let pc = document.createElement('p');
            let c = colour()
            console.log(c);
            pc.style.color = c
            pc.textContent = `Today's colour is ${c}`;
            main.append(pc)
            
        }) //default object is getting imported , name changed from default to import
        .catch((err)=>{
            console.log("failed to load rand or color function");
        })
    
    })
}


//we also make the import conditional. create a boolean variable ADDNUM , wrap the entire code within an if statement. Run code only if ADDNUM is true.
//this is not possible with normal imports but dynamic import gives us this facilty.
//also we don't need to write type = module in for main.js script tag in index html for this to run