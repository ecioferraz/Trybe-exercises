const fs = require('fs').promises;

// 1. Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
const readSimpsons = async () => {
  const resp = await fs.readFile('simpsons.json', 'utf-8');
  const simpsons = JSON.parse(resp);
  return simpsons.map(({ id, name }) => `${id} - ${name}`)
    .forEach((simpson) => console.log(simpson));
}

readSimpsons();

// 2. Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
const getSimpson = async (id) => {
  const resp = await fs.readFile('simpsons.json', 'utf-8');
  const simpsons = JSON.parse(resp);
  const findSimpson = simpsons.find((char) => Number(char.id) === id);
  if (!findSimpson) throw new Error('Id não encontrado');

  console.log(findSimpson.name);
}

getSimpson(1);

// 3. Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
const removeSimpsons = async () => {
  const resp = await fs.readFile('simpsons.json', 'utf-8');
  const simpsons = JSON.parse(resp);
  const newSimpsons = simpsons.filter((simpson) => Number(simpson.id) !== 6 && Number(simpson.id) !== 10);
  return fs.writeFile('simpsons.json', JSON.stringify(newSimpsons));
}

// removeSimpsons();

// 4. Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
const simpsonFamily = async () => {
  const resp = await fs.readFile('simpsons.json', 'utf-8');
  const simpsons = JSON.parse(resp);
  const newSimps = simpsons.filter((simpson) => simpson.id < 5);
  return fs.writeFile('simpsonFamily.json', JSON.stringify(newSimps));
}

// simpsonFamily();

// 5. Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
const addNelson = async () => {
  const resp = await fs.readFile('simpsonFamily.json', 'utf-8');
  const simpsonFamily = JSON.parse(resp);
  simpsonFamily.push({ id: '8', name: 'Nelson Muntz' });
  return fs.writeFile('simpsonFamily.json', JSON.stringify(simpsonFamily));
}

// addNelson();

// 6. Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
const addMaggie = async () => {
  const resp = await fs.readFile('simpsonFamily.json', 'utf-8');
  const simpsonFamily = JSON.parse(resp);
  const newSimps = simpsonFamily.filter((simpson) => simpson.id !== '8');
  newSimps.push({ id: '5', name: 'Maggie Simpson' });
  return fs.writeFile('simpsonFamily.json', JSON.stringify(newSimps));
}

// addMaggie();
