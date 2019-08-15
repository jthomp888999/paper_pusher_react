import API from '../api/api';
import { SET_USERNAME, LOGOUT_USER, SET_TOKEN } from './types';

const getUsername = (headers, dispatch) => {
  API.get('users/current', { headers: headers }).then(res => {
    dispatch({
      type: SET_USERNAME,
      payload: res.data.username
    });
  });
};

export const loginUser = user => dispatch => {
  const dispatchPayload = {};
  const headers = { 'Content-Type': 'application/json' };

  API.post('auth/token/obtain/', user)
    .then(res => {
      dispatchPayload.token = res.data.token;
      headers.Authorization = `token ${dispatchPayload.token}`;
      dispatch({
        type: SET_TOKEN,
        payload: res.data.token
      });
      getUsername(headers, dispatch);
    })
    .catch(err => console.log(err));
};

export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_USER
  });
};
