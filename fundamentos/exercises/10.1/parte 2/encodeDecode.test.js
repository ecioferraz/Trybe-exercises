const { encode, vowels, decode, numbers } = require('./encodeDecode');

describe('Testa as funções decode(object, string) e encode(object, string)', () => {
  it('Testa se encode é uma função', () => {
    expect(typeof encode).toBe('function');
  });

  it('Testa se decode é uma função', () => {
    expect(typeof decode).toBe('function');
  });

  it('Testa se encode converte as vogais a, e, i, o, u em 1, 2, 3, 4, 5, respectivamente', () => {
    expect(encode(vowels, 'iuaeo')).toEqual('35124');
  });

  it('Testa se decode converte 1, 2, 3, 4, 5 nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode(numbers, '35124')).toEqual('iuaeo');
  });

  it('Testa se encode converte apenas as vogais são convertidas em números', () => {
    expect(encode(vowels, 'ovo')).toEqual('4v4');
  });

  it('Testa se decode converte apenas os números em vogais', () => {
    expect(decode(numbers, 'h2ll4')).toEqual('hello');
  });

  it('Testa se encode retorna o mesmo número de caracteres que a string passada', () => {
    expect(encode(vowels, 'ovo').length).toBe(3);
  });

  it('Testa se encode retorna o mesmo número de caracteres que a string passada', () => {
    expect(decode(numbers, 'h2ll4').length).toBe(5);
  });
})