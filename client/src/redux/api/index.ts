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

export const signUp = (userData: object) => API.post('/auth/signup', userData);
export const signIn = (userData: object) => API.post('/auth/signin', userData);
export const getUsers = () => API.get('/auth');
export const getUser = (id: string) => API.get(`/users/${id}/user`);

export const followUser = (id: string, userId: object | string) =>
  API.put(`/users/${id}/follow`, { userId });
  
export const unfollowUser = (id: string, userId: object | string) =>
	API.put(`/users/${id}/unfollow`, {userId});



export const createPost = (postData: object) => API.post('/posts/create', postData);
export const allPosts = () => API.get('/posts');
export const myPosts = () => API.get('/posts/users/post');
export const likePost = (id: string, userId: string) => API.put(`/posts/${id}/like`, userId);
export const postComments = (id: string, text: object) =>
  API.put(`/posts/${id}/comments/create`, { text });
  
export const allPostComments = (id: string) =>
  API.get(`/posts/${id}/comments`);
  
export const deletePost = (postId:string | undefined) => API.delete(`/posts/${postId}/delete`);
export const deletePostComments = (id:string | undefined) => API.put(`/posts/comments/${id}/delete`);