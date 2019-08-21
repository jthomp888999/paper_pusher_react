import { tokenObtain, currentUser } from "../../api/api";
import { SET_USERNAME, LOGOUT_USER, SET_TOKEN } from "./types";

const getUsername = dispatch => {
  console.log('geting username')
  currentUser().then(res => {
    dispatch({
      type: SET_USERNAME,
      payload: res.data.username
    });
  });
};

export const loginUser = user => dispatch => {
  tokenObtain(user).then(res => {
    dispatch({
      type: SET_TOKEN,
      payload: res.data.token
    });
    getUsername(dispatch);
    }).catch(err => console.log(err));
};

export const logoutUser = () => dispatch => {
  dispatch({
    type: LOGOUT_USER
  });
};
