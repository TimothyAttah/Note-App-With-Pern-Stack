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


export interface ITodos {
	todo_id: number | string;
	task: string;
	isComplete: boolean;
	date?: Date | string;
}

export interface ITodosForm {
	task: string;
	isComplete: boolean;
	date?: Date | string;
}

export type InitialTodos = {
	todos: ITodos[];
	isLoading: boolean;
};

export type DeleteTodos = (id: number | string) => void;
export type IsCompleteTodos = (todos: ITodos) => void;
export type EditTodos = (id: number | string, task: string) => void;