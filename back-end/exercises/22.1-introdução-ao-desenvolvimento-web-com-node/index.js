const { questionInt } = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './avgspeed.js' },
  { name: 'Jogo de advinhação', script: './bet.js' },
];

let msg = scripts.map(({ name }, index) => `${index + 1} - ${name}`);

msg.unshift('Escolha uma opção');

msg = msg.join('\n');

const scriptNum = questionInt(msg) - 1;

const script = scripts[scriptNum];

if (!script) console.log('Número inválido. Saindo.');

require(script.script);
