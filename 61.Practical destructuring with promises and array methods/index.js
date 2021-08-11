/*
Destructuring allows us to see inside an object
or array when it is being passed to a function.
This can be combined with calls to Array methods
and Promise.then methods to great effect.
*/

let people = [
    { id: 1, name: 'Leonard', phd: true, partner: 'Penny' },
    { id: 2, name: 'Howard', phd: false, partner: 'Bernadette' },
    { id: 3, name: 'Sheldon', phd: true, partner: 'Amy' },
    { id: 4, name: 'Raj', phd: true, partner: 'Cinnamon' },
];

let nums = [12, 34, 56, 78, 90]

nums.map(number => {
    console.log(number);
})

let ppl = people.map(({name:nm, partner="sub"}) => {//destructuring ...only access the keys you need 
    //name changed to nm, default value partner = sub
    console.log("Name",nm ,"&" ,"Partner", partner);
})

let url = "http://127.0.0.1:5500/61.Practical%20destructuring%20with%20promises%20and%20array%20methods/people.json"
//path to ./people.json file

fetch(url)
.then(response => {
    if(!response.ok){throw new Error(resp.statusText)}
    return response.json()
})
.then(([first , second , ...rest]) => { //here data is an array , containing 4 objects,
//so we do array destructuring using []
    console.log("first",first);
    console.log("second",second);
    console.log("rest", rest);
})
//this code could be useful for pagination purpose
.catch(console.log("error"))