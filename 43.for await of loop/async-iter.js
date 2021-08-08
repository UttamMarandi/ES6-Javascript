let myObj = {
    //add an asyncIterator method to my object
    [Symbol.asyncIterator]() {
      //which will return an object that contains a method called next()
      return {
        i: 0 /* my counter property */,
        next() {
          if (this.i < 3) {
            //return value from the next method must be an object
            //the object should contain a value and a done property
            return new Promise(resolve => {
              let obj = { value: this.i, done: false };
              this.i = this.i + 1;
              setTimeout(resolve, 1000, obj);
              //this timeout delay value is not set until next() is called by for await...of
            });
          }
          //once our counter value is 3 or more tell whoever called next that we are done
          return new Promise(resolve => {
            setTimeout(resolve, 3000, { done: true });
          });
        }
      };
    }
  };
  
  (async function() {
    for await (let num of myObj) {
      console.log(num);
    }
  })();