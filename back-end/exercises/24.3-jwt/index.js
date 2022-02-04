const express = require('express');
const bodyParser = require('body-parser');

const { login, me, topSecret } = require('./controllers');
const { error, auth } = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.post('/login', login);

app.get('/users/me', auth, me);

app.get('/top-secret', topSecret);

app.use(error);

app.listen(3000);
