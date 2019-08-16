import API from '../../api/api';
import { SET_USERNAME, LOGOUT_USER, SET_TOKEN } from './types';

const getUsername = (dispatch) => {
  API.get('users/current').then(res => {
    dispatch({
      type: SET_USERNAME,
      payload: res.data.username
    });
  });
};

export const loginUser = user => dispatch => {
  const dispatchPayload = {};
  API.post('auth/token/obtain/', user)
    .then(res => {
      dispatchPayload.token = res.data.token;
      API.defaults.headers.common['Authorization'] = `token ${   // Set default header once token comes back
        dispatchPayload.token
      }`;
      API.defaults.headers.common['Content-Type'] = 'application/json';
      dispatch({
        type: SET_TOKEN,
        payload: res.data.token
      });
      getUsername(dispatch);
    })
    .catch(err => console.log(err));
};

export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_USER
  });
};
