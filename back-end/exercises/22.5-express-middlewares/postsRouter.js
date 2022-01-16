const postsRouter = require('express').Router();
const validateId = require('./middlewares/validatePosts');

postsRouter
  .get('/', validateId)
  .get('/:id', validateId);

module.exports = postsRouter;
