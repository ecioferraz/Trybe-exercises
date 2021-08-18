const myRemove = require('./myRemove');

// Ex 02
describe('Testa a função myRemove(arr, item)', () => {
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Verifica se o array passado por parâmetro não sofreu alterações', () => {
    const myArray = [5, 6, 7, 8];
    myRemove(myArray, 5);
    expect(myArray).toEqual(myArray);
  });
  
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})