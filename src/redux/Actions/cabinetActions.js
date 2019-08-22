import { SET_CABINET_ID, SET_CABINET_TREE_OBJ } from './types';

export const setCabinetID = id => dispatch => {
  dispatch({
    type: SET_CABINET_ID,
    payload: id
  });
};

export const setCabinetObj = obj => dispatch => {
  dispatch({
    type: SET_CABINET_TREE_OBJ,
    payload: obj
  });
};
