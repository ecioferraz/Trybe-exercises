import { Request, Response } from 'express';
import { BaseRestaurant, Restaurant } from '../interfaces/restaurant';
import { RestaurantServices } from '../services';

const create = async (req: Request, res: Response) => {
  const { name, foodType }: BaseRestaurant = req.body;
  const newRestaurant: Promise<Restaurant> = await RestaurantServices.create({ name, foodType });

  return res.status(201).json(newRestaurant);
};

export default {
  create,
};
