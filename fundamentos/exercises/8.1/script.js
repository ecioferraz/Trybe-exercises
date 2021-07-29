// Ex 01
const employee = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { nomeCompleto: fullName, email: `${email}.trybe.com`};
}

const newEmployees = () => {
  const employees = {
    id1: employee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(employee));

// Ex 02
const luckyNum = (num) => Math.ceil(Math.random() * num);

const winner = (bet, luckyNum) => (bet === luckyNum) ? 'Parabéns, você ganhou!' : 'Tente novamente';

console.log(winner(5, luckyNum(5)));

// callback? kk

const check = (bet, luckyNum) => bet === luckyNum;

const winner = (bet, winOrLose) => {
  const luckyNum = Math.ceil(Math.random() * 5);
  
  return winOrLose(bet, luckyNum) ? 'Parabéns, você ganhou!' : 'Tente novamente';
};

console.log(winner(5, check));

// Ex 03
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (rightAnswers, studentAnswers) => {
  let count = 0;
  for (let index = 0; index < studentAnswers.length; index += 1) {
    if (studentAnswers[index] === 'N.A') {
      count = count;
    } else if (studentAnswers[index] !== rightAnswers[index]) {
      count -= 0.5;
    } if (studentAnswers[index] === rightAnswers[index]) {
      count += 1;
    };
  };
  return `Nota: ${count}`;
}
console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS));

// Na minha lógica inicial iria colocar a função acima como parâmetro final para outra função, mas percebi que essa segunda função só traria a string com o resultado final. Entendi e segui a lógica do gabarito nas funções abaixo, apesar de não achar necessário nesse caso específico.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const grade = (rightAnswers, studentAnswers, checkAnswers) => {
  let count = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const countReturn = checkAnswers(rightAnswers[index], studentAnswers[index]);
    count += countReturn;
  }
  return `Nota: ${count}`;
}

console.log(grade(RIGHT_ANSWERS, STUDENT_ANSWERS, (correct, student) => {
  if (correct === student) {
    return 1;
  } else if (student === 'N.A') {
    return 0;
  } else {
    return -0.5;
  };
}));