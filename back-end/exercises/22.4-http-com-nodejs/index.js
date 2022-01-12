const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ex 02
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}` });
});

// ex 01
app.get('/ping', (_req, res) => res.json({ message: 'pong' }));

app.listen(3001, () => console.log('Aplicação ouvindo na porta 3001'));
