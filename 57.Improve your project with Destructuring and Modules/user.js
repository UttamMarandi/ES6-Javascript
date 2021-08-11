import { ValidationError } from './errors.js';

export const USER = {
  submit({username,email, endpoint, language, password}) { //use of destructuring, now we don't care about the order in which the parameters are passed
    //check the values
    //do the validation...
    //we can return errors here too
    if (email) {
      if (!USER.validateEmail(email)) {
        let err = new ValidationError('Failed email validation', email.id);
        return Promise.reject(err);
      }
    }
    //code for username validation
    if(username){
      if(!USER.validateUsername(username)) { //validateUsername is a funciton present USER object 
        let err = new ValidationError('Failed username validation', username.id);
        return Promise.reject(err)
      }
    }
    //send to the server
    let data = new FormData();
    return USER.upload(endpoint, data);
  },
  validateUsername(user){
    return true
  },
  validateEmail(input) {
    //do your email validation on the input field
    return false;
  },
  upload(endpoint, data) {
    let req = new Request(endpoint, {
      method: 'POST',
      body: data,
    });
    return fetch(endpoint);
  },
};