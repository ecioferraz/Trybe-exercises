import fs from 'fs/promises';
import { read } from '../functions';
import { BaseRestaurant, Restaurant } from "../interfaces/restaurant";

const create = async ({ name, foodType }: BaseRestaurant): Promise<Restaurant> => {
  const restaurants = await read();

  restaurants.push({ name, foodType });

  await fs.writeFile(restaurants);
};

export default {
  create,
};
