const userRouter = require('express').Router();
const { validateUser, createUser } = require('../middlewares/createUser');
const getUsers = require('../middlewares/getUser');

userRouter
  .post('/', validateUser, createUser)
  .get('/', getUsers);

module.exports = userRouter;
