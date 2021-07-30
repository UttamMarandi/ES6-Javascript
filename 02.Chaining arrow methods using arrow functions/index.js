//Chaining arrow methods using arrow functions

let people = [
    {"id":123, "name":"Rick Deckard", "email":"rick@bladerunner.org"},
    {"id":456, "name":"Roy Batty", "email":"roy@replicant.io"},
    {"id":789, "name":"J.F. Sebastian", "email":"j.f@tyler.com"},
    {"id":258, "name":"Pris", "email":"pris@replicant.io"}
];

//Find the names of all the people who have "replicant.io" emails ..use arrow functionss

//check for emails
let replicants = people.filter(item => item.email.indexOf("replicant.io") > -1)
console.log("all emails 'replicant.io' emails using arrow functions ", replicants);

//get the name of people with that mail
let replicantName = replicants.map(item => item.name)
console.log("names of all the people who have 'replicant.io' emails", replicantName);

//chain the above methods
console.log("chain the above methods");
let replicantsName = people.filter(item => item.email.indexOf("replicant.io") > -1).map(item => item.name)

console.log("names of all the people who have 'replicant.io' emails", replicantsName);