const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, name) =>
    acc + name.split('').reduce((acc, curr) =>
      curr === 'a' || curr === 'A' ? acc + 1 : acc, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);