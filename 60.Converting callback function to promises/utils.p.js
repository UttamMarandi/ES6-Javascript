//turn this one into a Promise based

// export const delay = (func, seconds = 2) => {
//   let timmy = setTimeout(func, seconds * 1000);
//   return timmy;
// };

export const delay = (seconds = 2)=> { //default value of seconds 2
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, seconds * 1000) 
    })
}