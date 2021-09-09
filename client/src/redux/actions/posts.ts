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
    toast.success(data.message);
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

export const myPosts = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.myPosts();
    console.log('this is my post', data);
    
    dispatch<PostActionTypes>({
      type: PostTypes.USER_POSTS_LISTS,
      payload: data.posts
    })
  } catch (err) {
     if (err.response && err.response.data) {
				toast.error(err.response.data.error);
			}
  }
}

export const likePost = (_id: string, userId: any) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.likePost(_id, userId)
    console.log('this is like post', data);
    
    dispatch<PostActionTypes>({
      type: PostTypes.POST_LIKE,
      payload: {_id, data}
    })
    toast.success(data.message);
  } catch (err) {
     if (err.response && err.response.data) {
				toast.error(err.response.data.error);
			}
  }
}

export const postComments = (id: string, text: object) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.postComments(id, text)
    console.log('post actions comments', data);
    
    dispatch<PostActionTypes>({
			type: PostTypes.POST_COMMENT,
			payload: data.post
		});
  } catch (err) {
     if (err.response && err.response.data) {
				toast.error(err.response.data.error);
			}
  }
}


export const allPostComment = (id: any) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.allPostComments(id)
    console.log(' All post actions comments', data);
    dispatch<PostActionTypes>({
      type: PostTypes.POST_COMMENT_LIST,
      payload: data.post.comments
    })
  } catch (err) {
      if (err.response && err.response.data) {
				toast.error(err.response.data.error);
			}
  }
}


export const deletePost = (postId: string | undefined) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.deletePost(postId);
    dispatch<PostActionTypes>({
      type: PostTypes.POST_DELETE,
      payload: postId
    })
    toast.success(data.message)
  } catch (err) {
     if (err.response && err.response.data) {
				toast.error(err.response.data.error);
			}
  }
}
export const deletePostComments = (id: string | undefined) => async (dispatch: Dispatch) => {
  try {
		const { data } = await api.deletePostComments(id);
console.log('delete comment actions',data);

		dispatch<PostActionTypes>({
			type: PostTypes.DELETE_COMMENT,
			payload: data.deletePostComment
		});
	} catch (err) {
     if (err.response && err.response.data) {
				toast.error(err.response.data.error);
			}
  }
}
