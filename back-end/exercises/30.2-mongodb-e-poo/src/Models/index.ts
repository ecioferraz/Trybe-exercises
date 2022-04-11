export default interface Model<T> {
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(_id: string): Promise<T | null>,
  update(): Promise<T[]>,
  delete(_id: string): Promise<T | null>,
}
