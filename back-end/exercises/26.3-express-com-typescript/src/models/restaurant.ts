import { read, write } from '../functions';
import { Restaurant, RestaurantInfo } from "../interfaces";

const create = async (restaurant: RestaurantInfo): Promise<Restaurant> => {
  const restaurants = await read();

  const id = restaurants[restaurants.length - 1].id;

  const newRestaurant = { id, ...restaurant };

  restaurants.push(newRestaurant);

  await write(restaurants);

  return newRestaurant;
};

const getAll = async (): Promise<Restaurant[]> => read();

export default {
  create,
  getAll,
};
