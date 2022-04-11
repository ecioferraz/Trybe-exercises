import { model as createModel } from 'mongoose';
import { ITournament } from '../interfaces';
import { ITournamentBase } from '../interfaces/ITournament';
import { TournamentSchema } from '../schemas/TournamentSchema';

export default class TournamentModel {
  constructor(public model = createModel<ITournament>('tournaments', TournamentSchema)) {}

  public async getAll(): Promise<ITournament[]> {
    return this.model.find();
  }

  public async getByYear(year: number): Promise<ITournament | null> {
    return this.model.findOne({ year });
  }

  public async create(tournamentData: ITournament): Promise<ITournament> {
    return this.model.create(tournamentData);
  }

  public async update(year: number, tournamentData: ITournament): Promise<ITournamentBase | null> {
    return this.model.findOneAndUpdate(
      { year },
      { ...tournamentData},
      { new: true },
      );
  }

  public async delete(year: number): Promise<ITournament | null> {
    return this.model.findOneAndDelete({ year });
  }

  public async getByRunnerUp(runnerUp: string): Promise<ITournament | null> {
    return this.model.findOne({ runnerUp });
  }
}
