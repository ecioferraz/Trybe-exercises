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

    const fileContent = await fs.readFile(fileName, 'utf-8')
      .catch((err) => {
        console.error(`Ocorreu um erro: ${err.message}`);
        return false;
      });

    if (!fileContent) return;

  const oldWord = await question('Qual palavra deseja substituir? ');
  const newWord = await question('Qual a nova palavra? ');
  const replaceWord = fileContent.replace(oldWord, newWord);
  console.log(`Resultado: ${replaceWord}`);

  const saveNewContent = await question('Onde salvar novo arquivo? ');
  return await fs.writeFile(saveNewContent, replaceWord);
}

start();
