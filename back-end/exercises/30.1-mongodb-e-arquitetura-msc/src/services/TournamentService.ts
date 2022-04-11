import TournamentModel from "../models/TournamentModel";
import { IError, ITournament } from "../interfaces";
import { StatusCode } from "../enums/StatusCode";

export default class TournamentService {
  constructor(public model = new TournamentModel()) {}

  public async getAll(): Promise<ITournament[]> {
    return this.model.getAll();
  }

  public async getByYear(year: number): Promise<ITournament | null | IError> {
    const tournaments = await this.model.getByYear(year);

    if (!tournaments) return { code: StatusCode.NOT_FOUND, message: 'There was no cup that year' };

    return tournaments;
  }

  public async create(tournamentData: ITournament): Promise<ITournament> {
    return this.model.create(tournamentData);
  }

  public async update(year: number, tournamentData: ITournament): Promise<ITournament | null | IError> {
    const tournament = await this.model.update(year, tournamentData);

    if (!tournament) return { code: StatusCode.NOT_FOUND, message: 'There was no cup that year' };

    return tournament;
  }

  public async delete(year: number): Promise<ITournament | null | IError> {
    const tournament = await this.model.delete(year);

    if (!tournament) return { code: StatusCode.NOT_FOUND, message: 'There was no cup that year' };

    return tournament;
  }

  public async getByRunnerUp(runnerUp: string): Promise<ITournament | null | IError> {
    const tournament = await this.model.getByRunnerUp(runnerUp);

    if (!tournament) return { code: StatusCode.NOT_FOUND, message: `${runnerUp} was never a runner up.` };

    return tournament;
  }
}
