import { SET_CABINET_ID } from './types';

export const setCabinetID = id => dispatch => {
  dispatch({
    type: SET_CABINET_ID,
    payload: id
  })
}