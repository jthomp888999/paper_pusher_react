import axios from 'axios';

export var API = axios.create({
  baseURL: 'http://localhost:80/api/',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export const tokenObtain = (user) => {
  return API.post("rest/auth/token/obtain/", user)
}

export const currentUser = () => {
  // Gets called right after tokenObtain, otherwise,
  // the next bit might be better there
  const state = JSON.parse(localStorage.getItem("state"));
  const token = state.auth.token;
  API.defaults.headers.common['Authorization'] = `token ${token}`

  return API.get("user_management/users/current/")
}

export const cabinetObj = () => {
  return API.get('cabinets/cabinets')
}

export const docsInCabinet = (id) => {
  return API.get(`cabinets/cabinets/${id}/documents`)
}