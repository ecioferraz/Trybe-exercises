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