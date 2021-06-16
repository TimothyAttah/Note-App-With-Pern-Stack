import axios from 'axios';

const baseURL = 'http://localhost:5000'

const API = axios.create({ baseURL: baseURL });

API.interceptors.request.use(req => {
  if (localStorage.getItem('jwt')) {
    req.headers['Authorization'] = localStorage.getItem('jwt')
  }
  return req;
});

export const signUpUser = (userData: object) => API.post('/auth/signup', userData);
