import IRecord, { RecordSchema } from '../Interfaces/IRecord';
import Service, { IServiceError } from '.';
import RecordModel from '../Models/RecordModel';

export default class RecordService extends Service<IRecord> {
  constructor() {
    super(new RecordModel());
  }

  public create = async (record: IRecord):
  Promise<IRecord | null | IServiceError> => {
    const parsed = RecordSchema.safeParse(record);

    if (!parsed.success) return { error: parsed.error };

    return this.model.create(record);
  };
}
