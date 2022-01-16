const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./userRouter');
const tokenRouter = require('./tokenRouter');
const postsRouter = require('./postsRouter');
const routeNotFound = require('./middlewares/routeNotFound');
const teamsRouter = require('./teamsRouter');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/btc', tokenRouter);
app.use('/posts', postsRouter);
app.use('/teams', teamsRouter);
app.use('*', routeNotFound);

app.listen(3000);
