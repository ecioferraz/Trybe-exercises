// Exercício 1
let n = 5;
let linha = "";

for (let index = 0; index < n; index += 1) {
  linha = linha + "*";
}

for (let index = 0; index < n; index += 1) {
  console.log(linha);
}

// Exercício 2
let n = 5;
let linha = "";

for (let index = 0; index < n; index += 1) {
  linha = linha + "*";
  console.log(linha);
}

// Exercício 3
let n = 5;
let linha = "";
let position = n;

for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {
  for (indexColuna = 0; indexColuna <= n; indexColuna += 1) {
    if (indexColuna < position) {
      linha = linha + " ";
    } else {
      linha = linha + "*";
    }
  }
  console.log(linha);
  linha = "";
  position -= 1;
}

// Exercício 4
let n = 5;
let linha = "";
let middle = (n + 1) / 2;
let left = middle;
let right = middle;

for (let indexLinha = 0; indexLinha <= middle; indexLinha += 1) {
  for (let indexColuna = 0; indexColuna <= n; indexColuna += 1) {
    if (indexColuna > left && indexColuna < right) {
      linha = linha + "*";
    } else {
      linha = linha + " ";
    }
  }
  console.log(linha);
  linha = "";
  right += 1;
  left -= 1;
}

// Bônus
// Exercício 5
let n = 7;
let middle = (n + 1) / 2;
let left = middle;
let right = middle;

for (indexLinha = 1; indexLinha <= middle; indexLinha += 1) {
  let linha = "";
  for(let indexColuna = 1; indexColuna <= n; indexColuna += 1) {
    if (indexColuna == left || indexColuna == right || indexLinha == middle) {
      linha = linha + "*";
    } else {
      linha = linha + " ";
    }
  }
  left -= 1;
  right += 1;
  console.log(linha);
}