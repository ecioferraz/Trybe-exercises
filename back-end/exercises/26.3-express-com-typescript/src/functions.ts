import fs from 'fs/promises';
import { Restaurant } from './interfaces/restaurant';

const read = async (): Promise<Restaurant[]> => {
  const data = await fs.readFile('./restaurants.json', 'utf8');

  const restaurants: Restaurant[] = JSON.parse(data);

  return restaurants;
};

const write = async (data: Restaurant[]): Promise<void> =>
  await fs.writeFile('./restaurants.json', JSON.stringify(data));

export {
  read,
  write,
};
