import rl from 'readline-sync';

const convert = (units: string[], value: number, base: string, convert: string): number => {
  const baseIndex = units.indexOf(base);
  const convertIndex = units.indexOf(convert);
  const exp = (convertIndex - baseIndex);
  
  return value * (10 ** exp);
};

const exec = (units: string[]) => {
  const value = rl.questionFloat('Digite um valor:\n');

  const baseChosen = rl.keyInSelect(
    units, 'Escolha um número para a unidade base:', { cancel: 'SAIR' }
    );

  if (baseChosen === -1) return console.log('Saindo!');

  const convertChosen = rl.keyInSelect(
    units, 'Escolha um número para a conversão:', { cancel: 'SAIR' }
    );

  if (convertChosen === -1) return console.log('Saindo!');

  const base = units[baseChosen];
  const convertTo = units[convertChosen];

  const converted = convert(units, value, base, convertTo);

  const msg = `${value}${base} é igual a ${converted}${convertTo}`;

  console.log(msg);
};

export default {
  convert,
  exec,
};
