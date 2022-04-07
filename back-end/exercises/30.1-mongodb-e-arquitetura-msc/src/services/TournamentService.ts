import TournamentModel from "../models/TournamentModel";
import { IError, ITournament } from "../interfaces";
import { StatusCode } from "../enums/StatusCode";

export default class TournamentService {
  constructor(private tournamentModel = new TournamentModel()) {}

  public async getAll(): Promise<ITournament[]> {
    return this.tournamentModel.getAll();
  }

  public async getByYear(year: number): Promise<ITournament | null | IError> {
    const tournaments = await this.tournamentModel.getByYear(year);

    if (!tournaments) return { code: StatusCode.NOT_FOUND, message: 'There was no cup that year' };

    return tournaments;
  }

  public async create(tournamentData: ITournament): Promise<ITournament> {
    return this.tournamentModel.create(tournamentData);
  }
}
