/**
 * build the interface and decide which modules to display
 * on the web page
 **/
//EVERYTHING THAT I UNDERSTOOD
//PS- I did not write any code

//PubSub Design is way of developing webapp where each component has no idea of the other componet code. Every component is linked using one js file pubSub.js. Any read/write done by componet is first updated to the pubSub and then pubSub send the data to componets which require the data. pubSub acts as a bridge between every componenet
//PubSub means Publish and Subscribe




import { movies } from './movies.js';
import { actors } from './actors.js';

import { movieForm } from './movie-form.js';
import { actorForm } from './actor-form.js';

import { stats } from './stats.js';

document.addEventListener('DOMContentLoaded', () => {
  let main = document.querySelector('main');
  let aside = document.querySelector('aside');
  //add a movies module
  movies.render(main);

  //add a form to add movies
  movieForm.render(aside);

  //add a stats module
  stats.render(aside);

  //add an actors module
  actors.render(main);

  //add a form to add actors
  actorForm.render(aside);
});
