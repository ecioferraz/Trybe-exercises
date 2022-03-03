import { Request, Response } from 'express';
import { RestaurantInfo } from '../interfaces';
import { RestaurantServices } from '../services';

const create = async (req: Request, res: Response) => {
  const restaurant: RestaurantInfo = req.body;
  const newRestaurant = await RestaurantServices.create(restaurant);

  return res.status(201).json(newRestaurant);
};

const getAll = async (_req: Request, res: Response) => {
  const restaurants = await RestaurantServices.getAll();

  return res.status(200).json(restaurants);
};

export default {
  create,
  getAll,
};
