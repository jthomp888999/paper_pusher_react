import API from '../api/api';
import { LOGIN_USER, LOGOUT_USER } from './types';

export const loginUser = user => dispatch => {
  const dispatchPayload = {};
  const headers = { 'Content-Type': 'application/json' };

  API.post('auth/token/obtain/', user)
    .then(res => {
      dispatchPayload.token = res.data.token;
      headers.Authorization = `token ${dispatchPayload.token}`;
    })
    .catch(err => console.log(err));

  API.get('users/current', { headers: headers }).then(res => {
    dispatchPayload.username = res.data;
    console.log(headers);
    dispatch({
      type: LOGIN_USER,
      payload: dispatchPayload.token,
      payload2: dispatchPayload.username
    });
  });
};

export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_USER
  });
};
