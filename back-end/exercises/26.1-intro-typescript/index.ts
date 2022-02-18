import rl from 'readline-sync';

const scripts = [
  { name: 'Converter comprimento', script: './length' },
  { name: 'Converter massa', script: './mass' },
  { name: 'Converter capacidade', script: './capacity' },
  { name: 'Converter área', script: './area' },
  { name: 'Converter volume', script: './volume' },
];

const scriptNames = scripts.map((script) => script.name);

const chosen = rl.keyInSelect(scriptNames, 'Escolha um número para executar o script de conversão de unidade', { cancel: 'SAIR' });

if (chosen === -1) console.log('Saindo!');

else require(scripts[chosen].script);
