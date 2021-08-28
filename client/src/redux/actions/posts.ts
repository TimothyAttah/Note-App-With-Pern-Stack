import { PostTypes } from "../types";
import * as api from '../api';
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import { PostActionTypes } from "../actionsTypes/postTypes";

export const createPost = (postData: object) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.createPost(postData);
    dispatch<PostActionTypes>({
      type: PostTypes.POST_CREATE,
      payload: data
    })
  } catch (err) {
    if (err.response && err.response.data) {
      toast.error(err.response.data.error)
    }
  }
}