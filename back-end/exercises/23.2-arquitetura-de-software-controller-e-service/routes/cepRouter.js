const cepRouter = require('express').Router();
const Cep = require('../controllers/Cep');

cepRouter
  .get('/:cep', Cep.findAddressByCep)
  .post('/', Cep.create);

module.exports = cepRouter;
