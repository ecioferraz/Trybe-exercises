const { obj1, obj2, obj3 } = require('./object');

describe('Compara dois objetos para verificar se são idênticos ou não', () => {
  it('Testa se obj1 é idêntico a obj2', () => {
    expect(obj1).toEqual(obj2);
  });

  it('Testa se obj1 é idêntico a obj3', () => {
    expect(obj1).not.toEqual(obj3);
  });

  it('Testa se obj2 é idêntico a obj3', () => {
    expect(obj2).not.toEqual(obj3);
  });
})