import { PostTypes } from "../types";

interface CreatePost {
  type: PostTypes.POST_CREATE;
  payload: object;
}
interface ListPosts {
  type: PostTypes.POSTS_LISTS;
  payload: object;
}
interface ListPost {
  type: PostTypes.POST_LIST;
  payload: object;
}
interface DeletePost {
  type: PostTypes.POST_DELETE;
  payload: string | number;
}
interface EditPost {
  type: PostTypes.POST_EDIT;
  payload: {
    _id: string | number;
    post: object;
  };
}


export type PostActionTypes = CreatePost
  | ListPost
  | ListPosts
  | DeletePost
  | EditPost;