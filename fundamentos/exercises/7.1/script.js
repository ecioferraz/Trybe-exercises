// Parte 1
// 1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
const testingScope = escopo => escopo === true ? `${ifScope} ótimo, fui utilizada no escopo!` : `${elseScope}`;

console.log(testingScope(true));

// 2. Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.;
oddsAndEvens.sort(function(a, b) {
  return a - b;
});

console.log(oddsAndEvens.sort((a, b) => a - b)); // será necessário alterar essa linha 😉

// referência
// https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
// https://stackoverflow.com/questions/7000851/array-sort-doesnt-sort-numbers-correctly

// Parte 2
// 1. Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const factor = num => (num < 2) ? 1 : factor (num - 1) * num; // Colocando a função dentro da própria função cria-se um loop, desde que haja uma condição (recursive function)

console.log(factor(4));

// referência
// https://stackoverflow.com/questions/3959211/what-is-the-fastest-factorial-function-in-javascript

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = str => {
  let array = str.split(' ');
  let longest = 0;
  let word = '';

  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > longest) {
      longest = array[index].length;
      word = array[index];
    }
  }
  return word;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// referência
// https://stackoverflow.com/questions/17386774/javascript-find-longest-word-in-a-string