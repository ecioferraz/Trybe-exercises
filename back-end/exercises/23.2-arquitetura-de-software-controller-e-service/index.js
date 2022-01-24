require('dotenv').config();
const express = require('express');
const cepRouter = require('./routes/cepRouter');
const bodyParser = require('body-parser');
const { pong } = require('./middlewares');
const error = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/ping', pong);

app.use('/cep', cepRouter);

app.use(error);

const PORT = process.env.PORT || 3000;

app.listen(PORT);
