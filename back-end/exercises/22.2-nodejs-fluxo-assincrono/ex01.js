const calculator = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') reject('Informe apenas números');

    const result = (a + b) * c;

    if (result < 50) reject('Valor muito baixo')
    resolve(result);
  });
}

// calculator(8, 1, 4)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

module.exports = calculator;
