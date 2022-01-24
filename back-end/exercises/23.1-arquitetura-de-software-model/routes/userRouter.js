const userRouter = require('express').Router();
const rescue = require('express-rescue');
const { validateUser, createUser } = require('../middlewares/createUser');
const findUserById = require('../middlewares/findUserById');
const getUsers = require('../middlewares/getUser');


userRouter
  .post('/', validateUser, createUser)
  .get('/', getUsers)
  .get('/:id', rescue(findUserById));

module.exports = userRouter;
