export interface NotesComments {
	_id: string | number;
	content: string;
	name: string;
	profilePicture: string;
	createdAt: Date | string;
}


export interface NotesList {
  _id: string | number;
  title: string;
  content: string;
  name: string;
  profilePicture: string;
  createdAt?: Date | string;
  comments?: NotesComments[];
}

export type Notes = {
  notes: NotesList[]
}