import { LOGIN_USER, LOGOUT_USER } from '../Actions/types';

const initial_state = {
  isAuthenticated: false,
  token: null,
  username: null
};

export default function(state = initial_state, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        isAuthenticated: true,
        token: action.payload,
        username: action.payload2
      };
    case LOGOUT_USER:
      return state;
    default:
      return state;
  }
}
