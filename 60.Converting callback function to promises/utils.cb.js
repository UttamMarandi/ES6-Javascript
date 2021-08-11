//a script that uses a callback to create a delay before running the next function

export const delay = (func, seconds = 2) => {
    let timmy = setTimeout(func, seconds * 1000);
    return timmy;
  };