/* 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

let a = 5;
let b = 10;
let resultado;

resultado = a + b;
console.log("a operação de a + b é igual a:",resultado);
resultado = a - b;
console.log("a operação de a - b é igual a:",resultado);
resultado = a * b;
console.log("a operação de a * b é igual a:",resultado);
resultado = a / b;
console.log("a operação de a / b é igual a:",resultado);
resultado = a % b;
console.log("a operação de a % b é igual a:",resultado);

/* 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados. */

if (a > b) {
  console.log("o maior valor é",a);
} else {
  console.log("o maior valor é",b);
}

/* 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados. */

let c = 15;

if (a > b && a > c) {
  console.log("o maior valor é",a);
} else if (b > a && b > c) {
  console.log("o maior valor é",b);
} else {
  console.log("o maior valor é",c);
}

/* 4. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */

if (a > 0) {
  console.log("positive")
} else if (a < 0) {
    console.log("negative");
} else {
  console.log("zero")
}

/* 5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo. */

let a1 = 80;
let a2 = 60;
let a3 = 40;

if (a1 + a2 + a3 == 180 && a1 > 0 && a2 > 0 && a3 > 0) {
  console.log(true);
} else {
  console.log("erro")
}

/* 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro. */

let peça = "rainha"

switch (peça) {
  case "peão":
    console.log("vertical, para frente, uma casa por vez; diagonal apenas na captura de outras peças; pode iniciar o jogo avançando duas casa.");
    case "torre":
      console.log("vertical ou horizontal; não pode pular outras peças.");
      break;
    case "cavalo":
      console.log("vertical e horizontal, em forma de 'L'; pode pular outras peças.");
      break;
    case "bispo":
      console.log("diagonal; não pode pular outras peças.");
      break;
    case "rainha":
      console.log("horizontal, vertical e horizontal; não pode pular outras peças.");
      break;
    case "rei":
      console.log("horizontal, vertical e horizontal, uma casa por vez.");
      break;
}

/* 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F */

let nota = 80;

if (nota >= 90 && nota <= 100) {
  console.log("A");
} else if (nota >= 80 && nota <= 90) {
  console.log("B");
} else if (nota >= 70 && nota <= 80) {
  console.log("C");
} else if (nota >= 60 && nota <= 70) {
  console.log("D");
} else if (nota >= 50 && nota <= 60) {
  console.log("E");
} else if (nota >= 0 && nota < 50) {
  console.log("E");
} else {
  console.log("não é válida");
}

/* 8. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

Bonus: use somente um if. */

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}

/* 9. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if . */

if (a % 2 == 1 || b % 2 == 1 || c % 2 == 1) {
  console.log(true);
} else {
  console.log(false);
}

/* 10. Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto) */

let valorCusto = 5;
let valorDeVenda = 15;

if (valorCusto < 0 || valorDeVenda < 0) {
  console.log("valor inválido");
} else {
  console.log([valorDeVenda - (valorCusto * 1.2)] * 1000);
}

/* 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido. */

let salarioBruto = 3000;
let inss1 = salarioBruto * 0.08;
let inss2 = salarioBruto * 0.09;
let inss3 = salarioBruto * 0.11;
let inss4 = 570.88;
let salarioBase = 0;

if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto - inss1;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioBase = salarioBruto - inss2;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioBase = salarioBruto - inss3;
} else if (salarioBruto > 5189.82) {
  salarioBase = salarioBruto - inss4;
}

let ir1 = (salarioBase * 0.075) - 142.8;
let ir2 = (salarioBase * 0.15) - 354.8;
let ir3 = (salarioBase * 0.225) - 636.13;
let ir4 = (salarioBase * 0.275) - 869.36;

if (salarioBase <= 1903.98) {
  salarioLiquido = salarioBase;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  salarioLiquido = salarioBase - ir1;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  salarioLiquido = salarioBase - ir2;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  salarioLiquido = salarioBase - ir3;
} else if (salarioBase > 4664.68) {
  salarioLiquido = salarioBase - ir4;
}

console.log(salarioLiquido)