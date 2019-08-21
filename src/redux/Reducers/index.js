import { combineReducers } from 'redux';
import auth from './authReducer';
import cabinets from './cabinetReducer';

export const allReducers = combineReducers({
  auth,
  cabinets
});
