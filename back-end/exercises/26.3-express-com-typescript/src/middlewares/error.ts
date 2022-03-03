import { Request, Response, NextFunction } from 'express';
import { StatusMessages } from '../interfaces';

export default (err: StatusMessages.Error, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.code || 500;

  const message = err.message || 'Internal server error';
  res.status(status).json({ message });
};
