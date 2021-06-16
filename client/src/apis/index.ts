import axios from 'axios';
import { ISigninUser} from '../redux/Interface';

const baseURL = 'http://localhost:5000'

const API = axios.create({ baseURL: baseURL });

API.interceptors.request.use(req => {
  if (localStorage.getItem('jwt')) {
    req.headers['Authorization'] = localStorage.getItem('jwt')
  }
  return req;
});

export const signUpUser = (userData: object) => API.post('/auth/signup', userData);

export const signInUser = (userData: ISigninUser) => API.post('/auth/signin', userData);
