export interface RestaurantInfo {
  name: string,
  foodType: string,
  openAt: string,
  closeAt: string,
};

export interface Restaurant extends RestaurantInfo {
  id: number,
};
