import { Model as M, Document } from 'mongoose';
import Model from '.';

export default abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) { }

  public create = async (record: T): Promise<T> =>
    this.model.create({ ...record });

  public read = async (): Promise<T[]> => this.model.find();

  public readOne = async (id: string): Promise<T | null> =>
    this.model.findById(id);

  public update = async (id: string, record: T): Promise<T | null> =>
    this.model.findByIdAndUpdate(id, { ...record }, { new: true });

  public delete = async (id: string): Promise<T | null> =>
    this.model.findByIdAndDelete(id);
}
