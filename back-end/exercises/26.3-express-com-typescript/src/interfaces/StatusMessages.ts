export enum StatusCode {
  OK = 200,
  CREATED,
  NOT_FOUND = 404,
};

export enum Messages {
  NOT_FOUND = 'Restaurant not found',
};

export interface Error {
  code: number,
  message: string,
};
