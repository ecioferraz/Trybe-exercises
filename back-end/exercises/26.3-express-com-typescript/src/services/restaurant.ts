import { RestaurantInfo, Restaurant } from "../interfaces";
import { RestaurantModel } from '../models';

const create = async (restaurant: RestaurantInfo): Promise<Restaurant> => {
  const newRestaurant = await RestaurantModel.create(restaurant);
  return newRestaurant;
};

const getAll = async (): Promise<Restaurant[]> => RestaurantModel.getAll();

export default {
  create,
  getAll,
};
