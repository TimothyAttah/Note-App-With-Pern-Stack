import { Posts } from "../InterfaceRedux";
import { PostTypes } from "../types";
import { PostActionTypes } from "../actionsTypes/postTypes";

const initialState: Posts = {
  posts: []
}

export const posts = (state = initialState, action: PostActionTypes) => {
  switch (action.type) {
    case PostTypes.POST_CREATE:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      }
    default:
      return state;
  }
}