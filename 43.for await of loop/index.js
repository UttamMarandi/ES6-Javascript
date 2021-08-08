//For await of loop
//for await of loop lets us loop through asynchronous results

//syntax
/**
 * for await(let val of obj) {
 *   use the asynchronous result
 * }
 */

//obj represent response objects from fetch or other promises that are asynchronous.
// await waits for each one of it to get resolved 
//val represent each obj one at a time

let thing = [
    new Promise(resolve => {
        setTimeout(resolve, 1000, "one"); //call resolve after 1000 ms and pass vakue one
    }),
    new Promise(resolve => {
        setTimeout(resolve, 2000, "two"); 
    }),
    new Promise(resolve => {
        setTimeout(resolve, 3000, "three"); 
    })
];
//code was not working b.c of not a semicolon after array
//Note : If you are using IIFE please use semicolon on previous and latter code


// let thing = [
//     new Promise(resolve => {
//       setTimeout(resolve, 1000, "one");
//     }),
//     new Promise(resolve => {
//       setTimeout(resolve, 2000, "two");
//     }),
//     new Promise(resolve => {
//       setTimeout(resolve, 3000, "three");
//     })
//   ];

//we have an array that contains result of asynchronous tasks .
//all three promises are created as soon as page loads but resolve is called after specified delay times
//if we use for..in or for..of loop then it will not work as these loop move through the array before the promises are resolved

//log elements in thing
(async function (){//IIFE
    for await (let item of thing){
        console.log(item);
    }
})();

//for an iterator to work with async objects we need an asynchronous iterator

