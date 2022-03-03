import fs from 'fs/promises';
import { Restaurant } from './interfaces';

const read = async (): Promise<Restaurant[]> => {
  const data = await fs.readFile('./static/restaurants.json', 'utf8');

  const restaurants: Restaurant[] = JSON.parse(data);

  return restaurants;
};

const write = async (data: Restaurant[]): Promise<void> =>
  await fs.writeFile('./static/restaurants.json', JSON.stringify(data));

export {
  read,
  write,
};
