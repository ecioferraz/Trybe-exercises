import { Schema, model as createModel, Document } from 'mongoose';
import IRecord from '../Interfaces/IRecord';
import MongoModel from './MongoModel';

interface IRecordDocument extends IRecord, Document { }

const recordSchema = new Schema<IRecordDocument>({
  artist: String,
  title: String,
  format: String,
  yearPublished: Number,
  new: Boolean,
});

export default class RecordModel extends MongoModel<IRecord> {
  constructor() {
    super(createModel('RecordStore', recordSchema));
  }
}
