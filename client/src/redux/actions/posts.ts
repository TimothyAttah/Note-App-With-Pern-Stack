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

// export const postComments = (_id: any, text: object) => async (dispatch: Dispatch) => {
//   try {
//     const { data } = await api.postComments(text)
//     console.log('post comments', data);
    
//     dispatch<PostActionTypes>({
//       type: PostTypes.POST_COMMENT,
//       payload: data
//     })
//   } catch (err) {
//      if (err.response && err.response.data) {
// 				toast.error(err.response.data.error);
// 			}
//   }
// }


export const postComments = (id: string, text:string) => (dispatch: Dispatch) => {
	fetch('/posts/comments', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + localStorage.getItem('jwt'),
		},
		body: JSON.stringify({ postId: id, text }),
	})
		.then(res => res.json())
		.then(data => {
			if (data.error) {
				console.log(data.error);
			} else {
				console.log(data);
				dispatch({
					type: PostTypes.POST_COMMENT,
					payload: data.result,
				});
			}
		})
		.catch(err => {
			console.log(err);
		});
};
