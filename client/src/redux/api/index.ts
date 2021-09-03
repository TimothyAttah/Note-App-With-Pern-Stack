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

export const signUp = (userData: object) => API.post('/users/signup', userData);
export const signIn = (userData: object) => API.post('/users/signin', userData);
export const getUsers = () => API.get('/users');
export const createPost = (postData: object) => API.post('/posts/create', postData);
export const allPosts = () => API.get('/posts');
export const likePost = (id: string, userId: string) => API.put(`/posts/${id}/like`, userId);
export const postComments = ( text: object) => API.put('/posts/comments', text)
export const deletePost = (postId:string | undefined) => API.delete(`/posts/${postId}/delete`);
export const deletePostComments = (postId:string | undefined) => API.delete(`/posts/comments/${postId}/delete`);