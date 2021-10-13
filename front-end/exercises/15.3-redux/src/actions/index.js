export const ADD_CLIENT = "ADD_CLIENT";
export const LOGIN = "LOGIN";

export const addClient = (client) => ({
  type: ADD_CLIENT,
  client,
});

export const login = (user) => ({
  type: LOGIN,
  user,
});
