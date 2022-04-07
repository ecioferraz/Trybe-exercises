import { Request, Response, NextFunction } from 'express';
import { IError } from '../interfaces';

export default class Middlewares {
  public static error(err: IError, _req: Request, res: Response, _next: NextFunction) {
    const status = err.code || 500;

    const message = err.message || 'Internal server error';
    res.status(status).json({ message });
  }
}
