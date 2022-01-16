const tokenRouter = require('express').Router();
const axioAPI = require('./middlewares/axioAPI');
const validateToken = require('./middlewares/validateToken');

tokenRouter.get('/price', validateToken, axioAPI);

module.exports = tokenRouter;
