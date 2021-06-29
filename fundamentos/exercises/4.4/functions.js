/* Exercício 1
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

// Exercício 4 */
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