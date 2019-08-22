import { SET_CABINET_ID, SET_CABINET_TREE_OBJ } from '../Actions/types';

const initial_state = {
  selectedCabinetID: null,
  cabinetObj: []
};

export default function(state = initial_state, action) {
  switch (action.type) {
    case SET_CABINET_ID:
      return {
        selectedCabinetID: action.payload
      };
    case SET_CABINET_TREE_OBJ:
      return {
        cabinetObj: action.payload
      };
    default:
      return state;
  }
}
