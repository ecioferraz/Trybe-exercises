import { model as createModel } from 'mongoose';
import { ITournament } from '../interfaces';
import { TournamentSchema } from '../schemas/TournamentSchema';

export default class TournamentModel {
  constructor(private tournamentModel = createModel<ITournament>('tournaments', TournamentSchema)) {}

  public async getAll(): Promise<ITournament[]> {
    return this.tournamentModel.find();
  }

  public async getByYear(year: number): Promise<ITournament | null> {
    return this.tournamentModel.findOne({ year });
  }

  public async create(tournamentData: ITournament): Promise<ITournament> {
    return this.tournamentModel.create(tournamentData);
  }

  public async update(year: number, tournamentData: ITournament): Promise<ITournament | null> {
    return this.tournamentModel.findOneAndUpdate(
      { year },
      { ...tournamentData},
      { new: true },
      );
  }

  public async delete(year: number): Promise<ITournament | null> {
    return this.tournamentModel.findOneAndDelete({ year });
  }
}
