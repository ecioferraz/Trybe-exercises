import { BaseRestaurant, Restaurant } from "../interfaces/restaurant";
import { RestaurantModel } from '../models';

const create = async ({ name, foodType }: BaseRestaurant) => {
  const newRestaurant: Promise<Restaurant> = await RestaurantModel.create({ name, foodType });
  return newRestaurant;
};

export default {
  create,
};
