import { ITodos } from '../InterfaceRedux';
import { TodosTypes } from '../types';

interface ListsTodos {
	type: TodosTypes.TODOS_LISTS;
	payload?: object ;
}

interface ListsTodo {
	type: TodosTypes.TODO_LIST;
	payload?: object;
}

interface CreateTodos {
	type: TodosTypes.TODO_CREATE
	payload: object;
}

interface EditTodos {
	type: TodosTypes.TODO_EDIT
	payload: {
		todo_id: number | string;
		task: string;
	};
}

interface DeleteTodos {
	type: TodosTypes.TODO_DELETE
	payload: number | string;
}

interface ToggleTodos {
	type: TodosTypes.TODO_TOGGLE
	payload: ITodos;
}

export type TodosActionTypes =
	| ListsTodos
	| CreateTodos
	| EditTodos
	| DeleteTodos
	| ToggleTodos
	| ListsTodo;
