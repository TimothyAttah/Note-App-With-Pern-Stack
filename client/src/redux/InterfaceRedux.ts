export interface NotesComments {
  _id: string | number;
  comment: string | object;
  // name: string;
  // profilePicture: string;
  // createdAt: Date | string;
}

export interface ITodos {
  todo_id: string;
  task: string;
  isComplete: boolean;
  date: Date | string;
}

export interface InitialTodos {
  todos: ITodos[];
  isLoading?: boolean;
}

export type Comments = {
  comments: NotesComments[];
};

export type NoteComment = {
  _id: string;
  comment: string | object;
};

export interface NotesList {
  _id: string | number;
  title: string;
  content: string;
  name: string;
  profilePicture: string;
  createdAt?: Date | string;
  comments: NotesComments[];
}

export type Notes = {
  notes: NotesList[];
};

export interface UserList {
  _id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  profilePicture: string;
  createdAt?: Date | string;
  coverPicture?: string | undefined;
}
export type AuthUserList = {
  _id: string;
  coverPicture?: string;
  createdAt?: string | Date;
  email?: string;
  firstName: string;
  followers: [];
  followings: [];
  isAdmin?: boolean;
  lastName: string;
  profilePicture?: string;
};

export interface UserAuthList {
  user: AuthUserList;
  posts: PostList[];
}

export type Auth = {
  auth: UserList[];
};

export type User = {
  user: UserAuthList;
};

export interface PostedBy {
  _id: string;
  coverPicture?: string;
  createdAt?: string | Date;
  email?: string;
  firstName: string;
  followers?: [];
  following?: [];
  isAdmin?: boolean;
  lastName: string;
  profilePicture?: string;
}
export interface PostedByComments {
  // _id?: string;
  // coverPicture?: string;
  createdAt?: string | Date | undefined;
  // email?: string;
  // followers?: [];
  // following?: [];
  // isAdmin?: boolean;
  firstName: string;
  lastName: string;
  profilePicture: string;
}

export interface PostList {
  _id: string;
  desc?: string;
  img?: string;
  createdAt: Date | string;
  userId: string | number;
  likes: any;
  comments: PostCommentsLists[];
  postedBy: PostedBy;
}

export type Posts = {
  posts: PostList[];
};

export interface PostCommentsLists {
  _id: string;
  text: {
    text: string;
    date: string;
  };
  postedBy: PostedByComments;
}

export type PostComments = {
  comments: PostCommentsLists[];
};

export type DeleteTodos = {
  id: any;
};
