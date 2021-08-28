export interface NotesComments {
	_id: string | number;
	comment: string | object;
	// name: string;
	// profilePicture: string;
	// createdAt: Date | string;
}

export type Comments = {
  comments: NotesComments[]
}

export type NoteComment = {
  _id: string;
  comment: string | object;
}


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
  notes: NotesList[]
}

export interface UserList {
	_id: string | number;
	firstName: string;
	lastName: string;
  email: string;
  password?: string
	profilePicture: string;
	createdAt?: Date | string;
}

export type Auth = {
	auth: UserList[];
};

export interface PostList {
	post_id: number | string;
	desc?: string;
	photo?: string;
	date: Date | string;
	userId: string | number;
	// likes: number | string;
	likes: any;
	comment: any;
}

export type Posts = {
	posts: PostList[]
};