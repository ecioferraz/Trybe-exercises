/* 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ; */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

/* Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum = sum + numbers[index];
};

console.log(sum);

/* 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos. */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;
let media = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum = (sum + numbers[index]);
};

media = sum / numbers.length;

console.log(media);

/* 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */

if (media > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
};

/* 5. Utilizando for, descubra qual o maior valor contido no array e imprima-o; */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maior = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
};

console.log(maior);

/* 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 == 1) {
    impar++;
  }
};

if (impar > 0) {
  console.log(impar)
} else {
  console.log("nenhum valor ímpar encontrado");
};

/* 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menor) {
    menor = numbers[index];
  }
};

console.log(menor);

/* 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; */

let sequence = [];

for (let index = 1; index <= 25; index += 1){
  sequence.push(index);
}

console.log(sequence);

/* 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . */

for (let index = 0; index < sequence.length; index += 1) {
  console.log(sequence[index]/2);
};