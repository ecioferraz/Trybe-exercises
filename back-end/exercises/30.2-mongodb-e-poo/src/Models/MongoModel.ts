import { Model as M, Document } from 'mongoose';
import Model from '.';

export default abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) { }

  public create = async (obj: T): Promise<T> =>
    this.model.create({ ...obj });

  public read = async (): Promise<T[]> => this.model.find();

  public readOne = async (id: string): Promise<T | null> =>
    this.model.findById(id);

  public update = async (): Promise<T[]> => {
    await this.model.updateMany(
      { $and: [
        { format: 'CD' },
        { yearPublished: 1997 },
      ] },
      { $set: { new: false } },
    );
  
    return this.model.find(
      { $and: [
        { format: 'CD' },
        { yearPublished: 1997 },
      ] },
    );
  };

  public delete = async (id: string): Promise<T | null> =>
    this.model.findByIdAndDelete(id);
}
