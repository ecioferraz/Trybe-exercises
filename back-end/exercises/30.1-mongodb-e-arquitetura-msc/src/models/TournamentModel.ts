import { model as createModel } from 'mongoose';
import { ITournament } from '../interfaces';
import { TournamentSchema } from '../schemas/TournamentSchema';

export default class TournamentModel {
  constructor(private tournamentModel = createModel<ITournament>('tournaments', TournamentSchema)) {}

  public async getAll(): Promise<ITournament[]> {
    return this.tournamentModel.find();
  }
}
