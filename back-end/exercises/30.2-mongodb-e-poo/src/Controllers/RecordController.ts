/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import Controller, { IRequestWithBody, ResponseError } from '.';
import RecordService from '../Services/RecordService';
import IRecord from '../Interfaces/IRecord';

export default class RecordController extends Controller<IRecord> {
  constructor(private _route = '/store') {
    super(new RecordService());
  }

  public get route() {
    return this._route;
  }

  public create = async (
    req: IRequestWithBody<IRecord>,
    res: Response<IRecord | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const record = await this.service.create(req.body);

      if (!record) return res.status(500).json({ error: this.errors.internal });

      if ('error' in record) return res.status(400).json(record);

      return res.status(201).json(record);
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  public readOne = async (
    req: Request<{ id: string }>,
    res: Response<IRecord | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;

    try {
      const record = await this.service.readOne(id);

      return record
        ? res.json(record)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  public update = async (
    _req: Request,
    res: Response<IRecord[] | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const record = await this.service.update();

      return record
        ? res.status(200).json(record)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  public delete = async (
    req: Request<{ id: string }>,
    res: Response<IRecord | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const { id } = req.params;
      const record = await this.service.delete(id);

      return record
        ? res.status(200).json(record)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}
