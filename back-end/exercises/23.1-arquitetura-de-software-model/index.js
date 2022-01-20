const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');
const handleError = require('./middlewares/handleError');

const app = express();

app.use(bodyParser.json());

app.use('/user', userRouter);

app.use(handleError);

app.listen(3000);
