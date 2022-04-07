import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../enums/StatusCode';
import TournamentService from '../services/TournamentService';

export default class TournamentController {
  constructor(private tournamentService = new TournamentService()) {}

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const tournaments = await this.tournamentService.getAll();

      return res.status(StatusCode.OK).send(tournaments);
    } catch (error: unknown) {
      next(error);
    }
  }
}
