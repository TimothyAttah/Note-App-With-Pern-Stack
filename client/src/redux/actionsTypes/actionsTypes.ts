import { NotesTypes } from '../types';

interface NoteCreate {
	type: NotesTypes.NOTE_CREATE;
	payload: object;
}

interface NotesLists {
	type: NotesTypes.NOTES_LISTS;
	payload?: object;
}

interface NoteList {
	type: NotesTypes.NOTE_LIST;
	payload: {
		id: string | number;
	};
}

interface NoteDelete {
	type: NotesTypes.NOTE_DELETE;
	payload: string | number;
}

interface NoteEdit {
	type: NotesTypes.NOTE_EDIT;
	payload?: {
		id: string | number;
		notes: object;
	};
}

interface NotesComments {
	type: NotesTypes.NOTE_COMMENT;
	payload: {
		_id: string | number;
		comment: string | object;
	};
}

interface DeleteComment {
	type: NotesTypes.DELETE_COMMENT;
	payload: string | number;
	// payload: {
	// 	noteId: string | number;
	// 	commentId: string | number;
	// }
}

export type NotesActionsTypes =
	| NoteCreate
	| NotesLists
	| NoteList
	| NoteDelete
	| NoteEdit
	| NotesComments
	| DeleteComment;
