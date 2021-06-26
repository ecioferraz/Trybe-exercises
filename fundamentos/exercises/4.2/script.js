/* Exercício 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// Exercício 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (index = 0; index < numbers.length; index += 1) {
  sum = sum + numbers[index];
}

console.log(sum); 

// Exercício 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media;

for (index = 0; index < numbers.length; index += 1) {
  sum = sum + numbers[index];
  media = sum / numbers.length;
}

console.log(media);

// Exercício 4
if (media > 20) {
  console.log("Valor maior que 20.");
} else {
  console.log("Valor menor que 20.");
}

// Exercício 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  };
}

console.log(maior);

// Exercício 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for (index = 0; index < numbers.length; index += 1) {
  if ((numbers[index] % 2) !== 0) {
    impar += 1;
  } else {
    console.log("Nenhum valor ímpar encontrado.")
  };
}

console.log(impar);

// Exercício 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (index = 0; index < numbers.length; index += 1) {
  if (menor > numbers[index]) {
    menor = numbers[index];
  };
}

console.log(menor);

// Exercício 8
let array = [];

for (index = 1; index < 26; index += 1) {
  array.push(index);
}

console.log(array);

// Exercício 9
for (index = 0; index < array.length; index += 1) {
  console.log(array[index] / 2);
}

// Bônus
// Exercício 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let index2 = 0; index2 < index; index2 += 1) {
    if (numbers[index] < numbers[index2]) {
      let position = numbers[index];
      numbers[index] = numbers[index2];
      numbers[index2] = position;
    };
  };
}

console.log(numbers);

// Exercício 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let index2 = 0; index2 < index; index2 += 1) {
    if (numbers[index] > numbers[index2]) {
      let position = numbers[index];
      numbers[index] = numbers[index2];
      numbers[index2] = position;
    };
  };
}

console.log(numbers);
*/
// Exercício 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let index = 0; index < numbers.length - 1; index += 1) {
  newNumbers.push(numbers[index] * numbers[index + 1]);
  if (index + 2 === numbers.length) {
    newNumbers.push(numbers[index + 1] * 2);
  }
}

  console.log(newNumbers);