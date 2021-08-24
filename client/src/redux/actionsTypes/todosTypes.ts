import { ITodos } from '../InterfaceRedux';
import { TodosTypes } from '../types';

interface ListsTodos {
	type: TodosTypes.LISTS_TODOS;
	payload?: object ;
}

interface ListsTodo {
	type: TodosTypes.LISTS_TODO;
	payload?: object;
}

interface CreateTodos {
	type: TodosTypes.CREATE_TODOS;
	payload: object;
}

interface EditTodos {
	type: TodosTypes.EDIT_TODOS;
	payload: {
		todo_id: number;
		task: string;
	};
}

interface DeleteTodos {
	type: TodosTypes.DELETE_TODOS;
	payload: number;
}

interface ToggleTodos {
	type: TodosTypes.TOGGLE_TODOS;
	payload: ITodos;
}

export type TodosActionTypes =
	| ListsTodos
	| CreateTodos
	| EditTodos
	| DeleteTodos
	| ToggleTodos
	| ListsTodo;
