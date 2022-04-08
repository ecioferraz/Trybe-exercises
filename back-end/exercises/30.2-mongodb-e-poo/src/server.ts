import express, { Router } from 'express';
import connection from './Models/Connection';

export default class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  public startServer(port = 3001) {
    connection();
    const actualPort = process.env.PORT || port;

    return this.app.listen(
      actualPort,
      () => console.log(`Listening at port ${actualPort}`),
    );
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }
}
