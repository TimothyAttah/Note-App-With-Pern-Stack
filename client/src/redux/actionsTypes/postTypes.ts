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
interface UserListPost {
  type: PostTypes.USER_POSTS_LISTS;
  payload: object;
}
interface DeletePost {
  type: PostTypes.POST_DELETE;
  payload: string | undefined;
}
interface DeletePostComments {
	type: PostTypes.DELETE_COMMENT;
	payload: {
		_id: string;
		data: object;
	};
}

interface EditPost {
  type: PostTypes.POST_EDIT;
  payload: {
    _id: string | number;
    post: object;
  };
}
interface LikePost {
  type: PostTypes.POST_LIKE;
  payload: {
    _id: string;
    data: object | string;
  }
}

interface CommentPost {
  type: PostTypes.POST_COMMENT;
  payload: {
    _id: string;
    data: object
  }
}

interface ListPostComment {
	type: PostTypes.POST_COMMENT_LIST;
	payload: {
		id: string;
		data: object;
	};
}


export type PostActionTypes = CreatePost
  | ListPost
  | ListPosts
  | DeletePost
  | EditPost
  | LikePost
  | CommentPost
  | DeletePostComments
  | ListPostComment
  | UserListPost;