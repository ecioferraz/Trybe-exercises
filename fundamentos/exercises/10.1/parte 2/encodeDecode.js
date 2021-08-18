const vowels = {
  'a': '1',
  'e': '2',
  'i': '3',
  'o': '4',
  'u': '5'
};

const numbers = {
  '1': 'a',
  '2': 'e',
  '3': 'i',
  '4': 'o',
  '5': 'u'
};

const encode = (object, string) => string.replace(/[aeiou]/g, c => object[c]);

const decode = (object, string) => string.replace(/[12345]/g, c => object[c]);

// referências https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
module.exports = {
  encode,
  vowels,
  decode,
  numbers,
};