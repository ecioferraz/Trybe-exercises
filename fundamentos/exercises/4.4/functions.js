// Exercício 1
function verificaPalindrome(word) {
  for(let index in word){
    if(word[index] != word[(word.length - 1) - index]){
      return false;
    }
  }
  return true;
}

console.log(verificaPalindrome('arara'));

// Exercício 2
let array = [5, 16, 3, 85, 46, 12, 157, 55];

function highestNumber(numbers) {
  let highest = 0;
  for (let index in numbers) {
  if (numbers[highest] < numbers[index]) {
    highest = index;
  };
}
  return highest;
}

console.log(highestNumber(array));

// Exercício 3
let array = [5, 16, 3, 85, 46, 12, 157, 55];

function lowestNumber(numbers) {
  let lowest = numbers[0];
  for (let index in numbers) {
  if (numbers[lowest] > numbers[index]) {
    lowest = index;
  };
}
  return lowest;
}

console.log(lowestNumber(array));

// Exercício 4
let arrayNames = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function longerName(names) {
  let longest = names[0];
  for (let index in names) {
  if (longest.length < names[index].length) {
    longest = names[index];
  };
}
  return longest;
}

console.log(longerName(arrayNames));

// Exercício 5


// Exercício 6 
let n = 5;

function sum(numbers) {
  let total = 0;
  for (let index = 0; index <= numbers; index += 1) {
    total += index;
  }
  return total;
}

console.log(sum(n));

// Exercício 7
let word = 'britney';
let ending = 'ney';

function checkEnding(word,ending) {
  let start = word.length - ending.length;
  let verify = '';
  for (index = start; index < word.length; index += 1) {
    verify += word[index];
  };
  if (verify === ending) {
    return true;
  } else {
    return false;
  };
}

console.log(checkEnding(word,ending));

// Bônus
// Exercício 1
let roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};