const calculator = require('./ex01');

const randomNum = () => Math.floor(Math.random() * 100 + 1);

const randomNumbers = Array.from({ length: 3 }).map(randomNum);

calculator(...randomNumbers)
  .then(res => console.log(res))
  .catch(err => console.log(err.message));
