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
    case PostTypes.POSTS_LISTS:
      return {
        ...state,
        posts: action.payload
      }
    case PostTypes.POST_LIKE:
      return {
        ...state,
        posts: state.posts.map(post => post._id === action.payload.id ? action.payload : post)
      }
    default:
      return state;
  }
}
