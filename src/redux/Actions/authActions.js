import { setHeaders, tokenObtain, currentUser } from '../../api/api';
import {
  SET_USERNAME,
  LOGOUT_USER,
  SET_TOKEN,
  USER_LOADING,
  USER_LOADED
} from './types';

const getUsername = dispatch => {
  currentUser().then(res => {
    dispatch({
      type: SET_USERNAME,
      payload: res.data.username
    });
  });
  dispatch({
    type: USER_LOADED
  });
};

export const loginUser = user => dispatch => {
  dispatch({
    type: USER_LOADING
  });
  tokenObtain(user)
    .then(res => {
      setHeaders(res.data.token);
      dispatch({
        type: SET_TOKEN,
        payload: res.data.token
      });
      getUsername(dispatch);
    })
    .catch(err => {
      if (err.response === undefined) {
        console.log('Offline or Server Down');
      } else {
        // Log Specific message from server
        console.log(err.response.data.non_field_errors[0]);
      }
    });
};

export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_USER
  });
};
