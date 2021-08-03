const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, elem) => acc.concat(elem));
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// referência http://jsfiddle.net/zAzaH/