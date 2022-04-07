import { Schema } from 'mongoose';

export interface ITournment {
  year: number,
  hostCountry: string,
  champions: string,
  runnerUp: string,
  editionGoals: number,
  editionStrikers: string[],
  bestPlayer: string,
  bestGoalkeeper?: string,
  bestYoungPlayer: string,
}

export const TournmentSchema = new Schema<ITournment>({
  year: { type: Number, required: true },
  hostCountry: { type: String, required: true },
  champions: { type: String, required: true },
  runnerUp: { type: String, required: true },
  editionGoals: { type: Number, required: true },
  editionStrikers: { type: [{ type: String }], required: true },
  bestPlayer: { type: String, required: true },
  bestGoalkeeper: { type: String },
  bestYoungPlayer: { type: String, required: true },
})
