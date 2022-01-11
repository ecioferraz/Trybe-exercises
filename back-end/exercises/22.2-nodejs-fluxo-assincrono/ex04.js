const fs = require('fs').promises;

const readSimpsons = async () => {
  const resp = await fs.readFile('simpsons.json', 'utf-8');
  const simpsons = JSON.parse(resp);
  return simpsons.map(({ id, name }) => `${id} - ${name}`)
    .forEach((simpson) => console.log(simpson));
}

readSimpsons();

const getSimpsons = async () => {
  const resp = await fs.readFile('simpsons.json', 'utf-8');
  return JSON.parse(resp);
}

const getSimpson = async (id) => {
  const resp = await getSimpsons();
  const findSimpson = resp.find((char) => Number(char.id) === id);
  if (!findSimpson) throw new Error('Id não encontrado');

  console.log(findSimpson.name);
}

getSimpson(1);

const removeSimpson = async (id) => {
  const resp = await getSimpsons();
  console.log(resp.filter((simpson) => Number(simpson.id) !== id));
}

removeSimpson(6);
removeSimpson(10);

// const addSimpson = async (simpson) => {
//   await fs.writeFile('simpson.json', JSON.stringify())
// }