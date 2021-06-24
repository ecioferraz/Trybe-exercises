/* 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

let a = 5;
let b = 10;
let resultado;

resultado = a +b;
console.log(resultado);
resultado = a - b;
console.log(resultado);
resultado = a * b;
console.log(resultado);
resultado = a / b;
console.log(resultado);
resultado = a % b;
console.log(resultado);

/* 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados. */

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

/* 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados. */

let c = 15;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}

/* 4. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */

if (0 == 1) {
  console.log("positive")
} else {
    console.log("negative");
}

/* 5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */

let a1 = 80;
let a2 = 60;
let a3 = 40;

if (a1 + a2 + a3 == 180 && a1 >= 0 && a2 >= 0 && a3 >= 0) {
  console.log(true);
} else {
  console.log("erro")
}

/* 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. */

