const { questionInt } = require('readline-sync');

const avgSpeed = () => {
  const distance = questionInt('Distância percorrida (m): ');
  const time = questionInt('Tempo de percurso (s): ');

  const avg = (distance / time).toFixed(2);

  console.log(`Velocidade média: ${avg}`);
}

avgSpeed();
