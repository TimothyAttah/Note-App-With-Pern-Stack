import axios from "axios";

// export const baseURL = process.env.REACT_APP_BACKEND_API;

export const baseURL =
  process.env.REACT_APP_LOCAL_API ||
  process.env.REACT_APP_BACKEND_API;

const API = axios.create({ baseURL: baseURL });

API.interceptors.request.use(req => {
   if ( localStorage.getItem( 'jwt' ) ) {
    req.headers[ 'Authorization' ] = `Bearer ${ localStorage.getItem( 'jwt' ) }`;
  }

  return req;
})

export const signUp = (userData: object) => API.post('/api/users/signup', userData);
export const signIn = (userData: object) => API.post('/api/users/signin', userData);
