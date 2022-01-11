const fs = require('fs').promises;

const DATA = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
const FILES = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

const createFiles = async () =>{
  await Promise.all(
    DATA.map((d, index) => fs.writeFile(`file${index + 1}.txt`, d))
    );
  
  const filesList = await Promise.all(
    FILES.map((file) => fs.readFile(file, 'utf-8'))
  );

  return fs.writeFile('fileAll.txt', filesList.join(' '));
}

createFiles();
