import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://localhost:80/api/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const setHeaders = token => {
  API.defaults.headers.common.Authorization = `token ${token}`;
};

export const tokenObtain = user => {
  return API.post('auth/token/obtain/', user);
};

export const currentUser = () => {
  return API.get('users/current/');
};

export const cabinetObj = num => {
  if (num) {
    return API.get(`cabinets/?page=${num}`);
  }
  return API.get('cabinets/');
};

export const docsInCabinet = id => {
  return API.get(`cabinets/${id}/documents`);
};
