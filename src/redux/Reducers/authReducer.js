import {
  SET_TOKEN,
  SET_USERNAME,
  LOGOUT_USER,
  USER_LOADED,
  USER_LOADING,
} from '../Actions/types';

const initialState = {
  isAuthenticated: false,
  token: null,
  username: null,
  isLoading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
      };
    case LOGOUT_USER:
      localStorage.clear();
      return {
        isAuthenticated: false,
        token: null,
        username: null,
      };
    default:
      return state;
  }
}
