export default function rand(num) {
    //generate a random number between 1 and todays date
    return Math.floor(Math.random() * num) + 1;
  }
  
export function colour() {
//generate a random 6-digit hex value colour string
return `#${Math.random().toString(16).substr(2, 6)}`;
}