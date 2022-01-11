const calculator = require('./ex01');

const randomNum = () => Math.floor(Math.random() * 100 + 1);

const randomNumbers = Array.from({ length: 3 }).map(randomNum);

const calculate = async () => {
  try {
    const result = await calculator(...randomNumbers);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

calculate();