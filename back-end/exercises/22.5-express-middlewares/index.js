const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./userRouter');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user', router);

app.listen(3000);
