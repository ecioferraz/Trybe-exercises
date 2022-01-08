const { questionFloat, questionInt } = require('readline-sync');

const readIMC = () => {
  const weight = questionFloat('Qual o seu peso? ');
  const height = questionInt('Qual a sua altura? ');

  const imc = (weight / Math.pow(height / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`)

  if (imc < 18.5) console.log('Abaixo do peso (magreza)');
  if (imc >= 18.5 && imc < 25) console.log('Peso normal');
  if (imc >= 25 && imc < 30) console.log('Acima do peso (sobrepeso)');
  if (imc >= 30 && imc < 35) console.log('Obesidade grau I');
  if (imc >= 35 && imc < 40) console.log('Obesidade grau II');
  if (imc >= 40) console.log('Obesidade graus III e IV');
};

readIMC();
