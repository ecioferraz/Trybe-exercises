import { z } from 'zod';

const RecordSchema = z.object({
  artist: z.string(),
  title: z.string(),
  format: z.string(),
  yearPublished: z.number(),
  new: z.boolean(),
});

type IRecord = z.infer<typeof RecordSchema>;

export default IRecord;
export { RecordSchema };
