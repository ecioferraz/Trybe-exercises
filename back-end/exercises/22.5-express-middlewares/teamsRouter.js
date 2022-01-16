const teamsRouter = require('express').Router();
const validateTeams = require('./middlewares/validateTeams');
const getTeams = require('./middlewares/getTeams');

teamsRouter
  .post('/', validateTeams)
  .get('/', getTeams);

module.exports = teamsRouter;
