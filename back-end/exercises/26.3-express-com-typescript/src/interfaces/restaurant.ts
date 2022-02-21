export interface BaseRestaurant {
  name: string,
  foodType: string,
};

export interface Restaurant extends BaseRestaurant {
  id: number,
  openAt: Date,
  closeAt: Date,
};
