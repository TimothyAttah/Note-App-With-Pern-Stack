export enum NotesTypes {
  NOTE_CREATE = 'NOTE_CREATE',
  NOTES_LISTS = 'NOTES_LISTS',
  NOTE_LIST = 'NOTE_LIST',
  NOTE_DELETE = 'NOTE_DELETE',
  NOTE_EDIT = 'NOTE_EDIT',
  NOTE_COMMENT = 'NOTE_COMMENT',
  DELETE_COMMENT = 'DELETE_COMMENT',
}

export enum UserTypes {
  SIGN_IN = 'SIGN_IN',
	SIGN_UP = 'SIGN_UP',
	SIGN_OUT = 'SIGN_OUT',
	GET_USERS = 'GET_USERS',
  GET_USER = 'GET_USER',
	FOLLOW_USER = 'FOLLOW_USER',
	UNFOLLOW_USER = 'UNFOLLOW_USER',
}
export enum UserAuthTypes {
  GET_USER = 'GET_USER',
	FOLLOW_USER = 'FOLLOW_USER',
	UNFOLLOW_USER = 'UNFOLLOW_USER',
}

export enum PostTypes {
	POST_CREATE = 'POST_CREATE',
	POSTS_LISTS = 'POSTS_LISTS',
	USER_POSTS_LISTS = 'USER_POSTS_LISTS',
	POST_LIST = 'POST_LIST',
	POST_DELETE = 'POST_DELETE',
	POST_EDIT = 'POST_EDIT',
	POST_LIKE = 'POST_LIKE',
	POST_COMMENT = 'POST_COMMENT',
	POST_COMMENT_LIST = 'POST_COMMENT_LIST',
	DELETE_COMMENT = 'DELETE_COMMENT',
}