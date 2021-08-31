import { PostTypes } from "../types";
import * as api from '../api';
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import { PostActionTypes } from "../actionsTypes/postTypes";


export const createPost = (postData: object) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.createPost(postData);
   console.log('This is action post', data);
    
    dispatch<PostActionTypes>({
      type: PostTypes.POST_CREATE,
      payload: data.post
    })
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.error)
    }
  }
}

export const allPosts = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.allPosts();
    dispatch<PostActionTypes>({
      type: PostTypes.POSTS_LISTS,
      payload: data.posts
    })
  } catch (err) {
     if (err.response && err.response.data) {
				toast.error(err.response.data.error);
			}
  }
}

export const likePost = (id: string, userId: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.likePost(id, userId)
    console.log('this is like post', data);
    
    dispatch<PostActionTypes>({
      type: PostTypes.POST_LIKE,
      payload: {id, data}
    })
  } catch (err) {
     if (err.response && err.response.data) {
				toast.error(err.response.data.error);
			}
  }
}