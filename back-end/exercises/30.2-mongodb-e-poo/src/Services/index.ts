import { ZodError } from 'zod';
import Model from '../Models';

export interface IServiceError {
  error: ZodError,
}

export default abstract class Service<T> {
  constructor(protected model: Model<T>) { }

  public async create(obj: T): Promise<T | null | IServiceError> {
    return this.model.create(obj);
  }

  public async read(): Promise<T[]> {
    return this.model.read();
  }

  public async readOne(id: string): Promise<T | null | IServiceError> {
    return this.model.readOne(id);
  }

  public async update(): Promise<T[]> {
    return this.model.update();
  }

  public async delete(id: string): Promise<T | null | IServiceError> {
    return this.model.delete(id);
  }
}
