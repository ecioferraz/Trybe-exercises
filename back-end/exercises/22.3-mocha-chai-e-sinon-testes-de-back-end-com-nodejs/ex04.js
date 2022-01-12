const fs = require('fs').promises;

const writeOnFile = (fileName, fileContent) => {
  fs.writeFile(fileName, fileContent);
  return 'ok';
};

module.exports = { writeOnFile };
