const fs = require('fs').promises;

const readFile = async (path) => {
  try {
    const resp = await fs.readFile(path, 'utf-8');
    return JSON.parse(resp);
  } catch (err) {
    return err.message;
  }
};

const writeFile = async (path, newContent) => {
  try {
    const content = await readFile(path);
    content.push(newContent);
    await fs.writeFile(path, JSON.stringify(content));
    return content;
  } catch (err) {
    return err.message;
  }
};

module.exports = { readFile, writeFile };
