import { SET_CABINET_ID } from '../Actions/types';

const initial_state = {
  selectedCabinetID: null
}

export default function( state = initial_state, action) {
  switch (action.type) {
    case SET_CABINET_ID:
      return {
        selectedCabinetID: action.payload
      }
    default:
      return state;
  }
}