import express from 'express';
import routes from './routes';
import connection from './models/connection';
import Middlewares from './middlewares';

export default class App {
  public express: express.Application;

  public connection: Promise<typeof import('mongoose')>;

  constructor() {
    this.express = express();
    this.middlewares();
    this.connection = connection();
    this.routes();
    this.express.use(Middlewares.error);
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.use(routes);
  }
}
