const { it } = require('@jest/globals');
const myFizzBuzz = require('./myFizzBuzz');

describe('Testa a função myFizzBuzz(num)', () => {
  it('Verifica se o retorno é o esperado a partir de um número divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Verifica se o retorno é o esperado a partir de um número divisível por 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Verifica se o retorno é o esperado a partir de um número divisível por 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('Verifica se o retorno é o esperado a partir de um número não divisível por 3 ou 5', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });

  it('Verifica se o retorno é o esperado a partir de um parâmetro que não é número', () => {
    expect(myFizzBuzz('a')).toBe(false);
  });
});