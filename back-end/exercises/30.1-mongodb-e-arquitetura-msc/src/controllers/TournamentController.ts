import { NextFunction, Request, Response } from 'express';
import { StatusCode } from '../enums/StatusCode';
import TournamentService from '../services/TournamentService';

export default class TournamentController {
  constructor(public service = new TournamentService()) {}

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const tournaments = await this.service.getAll();

      return res.status(StatusCode.OK).json(tournaments);
    } catch (error: unknown) {
      next(error);
    }
  }

  public getByYear = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { year } = req.params;
      const tournament = await this.service.getByYear(+year);

      return res.status(StatusCode.OK).json(tournament);
    } catch (error: unknown) {
      next(error);
    }
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tournament = await this.service.create(req.body);

      return res.status(StatusCode.CREATED).json(tournament);
    } catch (error: unknown) {
      next(error);
    }
  }

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { year } = req.params;
      const tournament = await this.service.update(+year, req.body);

      return res.status(StatusCode.OK).json(tournament);
    } catch (error: unknown) {
      next(error);
    }
  }

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { year } = req.params;
      const tournament = await this.service.delete(+year);

      return res.status(StatusCode.OK).json(tournament);
    } catch (error: unknown) {
      next(error);
    }
  }

  public getByRunnerUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { country } = req.params;
      const tournament = await this.service.getByRunnerUp(country);

      return res.status(StatusCode.OK).json(tournament);
    } catch (error: unknown) {
      next(error);
    }
  }
}
