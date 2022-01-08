const { question, questionInt } = require('readline-sync');

const bet = () => {
  const betNum = questionInt('Digite sua aposta de 0 a 10: ');

  const randomNum = parseInt(Math.random() * 10);

  const lossMsg = `Opa, não foi dessa vez. O número era ${randomNum}`;
  const winMsg = 'Parabéns, número correto!';

  if (betNum !== randomNum) console.log(lossMsg);
  if (betNum === randomNum) console.log(winMsg);

  const playAgain = question("Digite 's' para jogar novamente, ou outra tecla para sair: ");

  if (playAgain.toLowerCase() !== 's') console.log('Até a próxima!');
  if (playAgain.toLowerCase() === 's') bet();
}

bet();
