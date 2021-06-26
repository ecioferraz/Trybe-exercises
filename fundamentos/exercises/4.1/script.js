// Exercício 1

let a = 5;
let b = 10;

let adicao = a + b;
console.log(adicao);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let modulo = a % b;
console.log(modulo);

// Exercício 2

if (a > b) {
  console.log(a + " é o maior número.");
} else {
  console.log(b + " é o maior número.");
}

// Exercício 3

let c = 15;

if (a > b && a > c) {
  console.log(a + " é o maior número.");
} else if (b > a && b > c) {
  console.log(b + " é o maior número.");
} else {
  console.log(c + " é o maior número.");
}

// Exercício 4

if (a > 0) {
  console.log("positive");
} else if (a < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// Exercício 5

let ang1 = 60;
let ang2 = 80;
let ang3 = 40;

if (ang1 + ang2 + ang3 == 180 && ang1 > 0 && ang2 > 0 && ang3 > 0) {
  console.log(true)
} else {
  console.log(false);
}

// Exercício 6

let peça = "rainha";

switch(peça) {
  case "rei":
    console.log("horizontal, vertical e horizontal, uma casa por vez.");
    break;
  case "rainha":
    console.log("horizontal, vertical e horizontal; não pode pular outras peças.");
    break;
  case "bispo":
    console.log("diagonal; não pode pular outras peças.");
    break;
  case "cavalo":
    console.log("vertical e horizontal, em forma de 'L'; pode pular outras peças.");
    break;
  case "torre":
    console.log("vertical ou horizontal; não pode pular outras peças.");
    break;
  case "peão":
    console.log("vertical, para frente, uma casa por vez; diagonal apenas na captura de outras peças; pode iniciar o jogo avançando duas casa.");
    break;
};

// Exercício 7

let nota = 89;

if (nota >= 90 && nota <= 100) {
  console.log("A");
} else if (nota >= 80 && nota < 90) {
  console.log("B");
} else if (nota >= 70 && nota < 80) {
  console.log("C");
} else if (nota >= 60 && nota < 70) {
  console.log("D");
} else if (nota >= 50 && nota < 60) {
  console.log("E");
} else if (nota >= 0 && nota < 50) {
  console.log("F");
} else {
  console.log("Não é um valor válido.")
}

// Exercício 8

Bonus: use somente um if . */

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}

// Exercício 9

Bonus: use somente um if. */

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}

// Exercício 10

let valorCusto = 12;
let valorVenda = 20;

if (valorCusto >= 0 && valorVenda >= 0) {
  console.log([valorVenda - (valorCusto * 1.2)] * 1000);
} else {
  console.log("Valor inválido");
}

// Exercício 11

let salarioBruto = 3000;
let salarioLiquido;
let salarioBase;

if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto - (salarioBruto * 0.08);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioBase = salarioBruto - (salarioBruto * 0.09);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioBase = salarioBruto - (salarioBruto * 0.11);
} else {
  salarioBase = salarioBruto - 570.88;
}

console.log(salarioBase);

if (salarioBase <= 1903.98) {
  salarioLiquido = salarioBase;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  salarioLiquido = salarioBase - ([salarioBase * 0.075] - 142.8);
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  salarioLiquido = salarioBase - ([salarioBase * 0.15] - 354.8);
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  salarioLiquido = salarioBase - ([salarioBase * 0.225] - 636.13);
} else {
  salarioLiquido = salarioBase - ([salarioBase * 0.275] - 869.36);
}

console.log(salarioLiquido);