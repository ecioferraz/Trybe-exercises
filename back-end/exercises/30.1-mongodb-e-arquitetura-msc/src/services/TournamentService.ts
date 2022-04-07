import TournamentModel from "../models/TournamentModel";
import { ITournament } from "../interfaces";

export default class TournamentService {
  constructor(private tournamentModel = new TournamentModel()) {}

  public async getAll(): Promise<ITournament[]> {
    return this.tournamentModel.getAll();
  }
}
