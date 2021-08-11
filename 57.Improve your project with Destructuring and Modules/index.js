import { USER } from './user.js';
import { NetworkError } from './errors.js';

const APP = {
  init() {
    //add event listeners to form elements
    APP.addListeners();
  },
  addListeners() {
    let form = document.sampleForm;
    form.addEventListener('keypress', (ev) => {
      let key = ev.keyCode || ev.which;
      if (key === 10 || key === 13) {
        APP.send(ev);
      }
    });
    form.addEventListener('submit', APP.send);
    let btn = document.getElementById('btnSend');
    btn.addEventListener('click', APP.send);
  },
  send(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    let email = document.getElementById('email');
    let password = document.getElementById('pass');
    let language = document.getElementById('lang');
    let endpoint = '/register';

    let obj = { //if the name of the key and value variable is same then we can use only one to represent both
      email, //same as email : email
      password,
      language,
      endpoint
    }

    USER.submit(email, endpoint, language, password)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw new NetworkError(`${response.statusText} ${response.status}`);
        }
      })
      .then((info) => {
        console.log(info);
      })
      .catch((err) => {
        switch (err.name) {
          case 'ValidationError':
            //deal with form errors
            console.warn(`Form validation error with ${err.field}.`);
            document.getElementById(err.field).classList.add('error');
            break;
          case 'NetworkError':
            //unable to complete the fetch
            console.warn('unable to complete the fetch');
          default:
            console.warn({ err });
        }
      });
  },
};
document.addEventListener('DOMContentLoaded', APP.init);