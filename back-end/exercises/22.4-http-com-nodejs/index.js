const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const { getSimpsons, setSimpsons } = require('./fs-utils.js');
const app = express();
app.use(cors());
app.use(bodyParser.json());

// ex 02
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}` });
});

// ex 03
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (Number(age) < 18) return res.status(401).json({ message: 'Unauthorized' });

  res.status(200).json({ message: `Hello, ${name}` });
});

// ex 01
app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

// ex04
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

//ex 05
app.get('/simpsons', rescue(async (req, res) =>{
  const simpsons = await getSimpsons();
  res.status(200).json(simpsons);
}));

app.get('/simpsons/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const simpsons = await getSimpsons();
  const simpson = simpsons.find((simp) => simp.id === id);

  if (!simpson) return res.status(404).json({ message: 'Simpson not found!' });

  res.status(202).json(simpson);
}));

app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await getSimpsons();

  const isSimpson = simpsons.some((simpson) => simpson.id === id);
  if (isSimpson) return res.status(409).json({ message: 'Id already exists!' });

  simpsons.push({ id, name });
  await setSimpsons(simpsons);

  res.status(204).end();
}));

app.use((err, _req, res, _next) => res.status(500).send(`Something went wrong! Message: ${err.message}`));

app.listen(3001, () => console.log('Aplicação ouvindo na porta 3001'));
