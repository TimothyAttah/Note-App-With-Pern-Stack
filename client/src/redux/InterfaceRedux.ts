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