import { Router } from 'express';
import Controller from '../Controllers';

export default class CustomRouter<T> {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(
    controller: Controller<T>,
    route: string = controller.route,
  ) {
    this.router.route(route)
      .get(controller.read)
      .post(controller.create)
      .put(controller.update);

    this.router.route(`${route}/:id`)
      .get(controller.readOne)
      .delete(controller.delete);
  }
}
