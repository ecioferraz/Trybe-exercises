import { Router } from 'express';
import RestaurantController from '../controllers/restaurant';

const router = Router();

router.route('/')
  .post(RestaurantController.create)
  .get(RestaurantController.getAll);

  export default router;
