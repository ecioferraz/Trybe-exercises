
const fs = require('fs').promises;

const getSimpsons = async () => {
  const resp = await fs.readFile('simpsons.json', 'utf-8');
  return JSON.parse(resp);
}

const setSimpsons = (newSimpsons) => fs.writeFile('simpsons.json', JSON.stringify(newSimpsons));

module.exports = { getSimpsons, setSimpsons };
