import { SET_TOKEN, SET_USERNAME, LOGOUT_USER } from '../Actions/types';

const initial_state = {
  isAuthenticated: false,
  token: null,
  username: null
};

export default function(state = initial_state, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case SET_USERNAME:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload
      };
    case LOGOUT_USER:
      return {
        isAuthenticated: false,
        token: null,
        username: null
      };
    default:
      return state;
  }
}
