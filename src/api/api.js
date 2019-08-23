import axios from 'axios';

export var API = axios.create({
  baseURL: 'http://localhost:80/api/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

export const setHeaders = token => {
  API.defaults.headers.common['Authorization'] = `token ${token}`;
};

export const tokenObtain = user => {
  return API.post('rest/auth/token/obtain/', user);
};

export const currentUser = () => {
  return API.get('user_management/users/current/');
};

export const cabinetObj = () => {
  return API.get('cabinets/cabinets/');
};

export const docsInCabinet = id => {
  return API.get(`cabinets/cabinets/${id}/documents`);
};
