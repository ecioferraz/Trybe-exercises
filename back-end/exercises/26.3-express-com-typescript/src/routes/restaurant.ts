import { Router } from 'express';
import RestaurantController from '../controllers/restaurant';

const router = Router();

router.route('/')
  .post(RestaurantController.create);

  export default router;
