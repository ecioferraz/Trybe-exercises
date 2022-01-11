const fs = require('fs').promises;
const readline = require('readline');

const question = (msg) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(msg, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

const start = async () => {
  const fileName = await question('Digite o arquivo desejado: ');

  try {
    const fileContent = await fs.readFile(fileName, 'utf-8');
    console.log(fileContent);
  } catch (err) {
    console.log('Esse arquivo não existe.');
  }
}

start();
