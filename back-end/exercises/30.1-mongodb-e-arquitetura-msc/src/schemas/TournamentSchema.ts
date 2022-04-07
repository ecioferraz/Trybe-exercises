import { Schema } from 'mongoose';
import { ITournament } from '../interfaces';

export const TournamentSchema = new Schema<ITournament>({
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

/* Schema from course's answer
import { Schema, Document, Types } from 'mongoose';

export interface IWorldCup extends Document {
  year: number,
  hostCountry: string,
  champions: string,
  runnerUp: string,
  editionGoals: number,
  editionStrikers: Array<string>,
  bestPlayer?: string,
  bestGoalkeeper?: string,
  bestYoungPlayer?: string,
}

export const WorldCupSchema = new Schema<IWorldCup>({
  id: { type: Types.ObjectId },
  year: { type: Number, required: true },
  hostCountry: { type: String, required: true },
  champions: { type: String, required: true },
  runnerUp: { type: String, required: true },
  editionGoals: { type: Number, required: true },
  editionStrikers: { type: [{ type: String }], required: true },
  bestPlayer: { type: String, required: false },
  bestGoalkeeper: { type: String, required: false },
  bestYoungPlayer: { type: String, required: false }}); */
