import { Router } from "express";
import TournamentController from './controllers/TournamentController';

const tournamentController = new TournamentController();
const routes = Router();

routes.route('/')
  .get(tournamentController.getAll);

routes.route('/:year')
  .get(tournamentController.getByYear);

export default routes;
