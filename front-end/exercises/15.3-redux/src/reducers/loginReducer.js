import { LOGIN } from '../actions';

const INITIAL_STATE = {};

export default function loginReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case LOGIN:
      return action.user;
    default:
      return state;
  }
};