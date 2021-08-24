import { Dispatch } from 'redux';
import { toast } from 'react-toastify';
import { TodosActionTypes } from '../actionsTypes/todosTypes';
import { ITodos } from '../InterfaceRedux';
import { TodosTypes } from '../types';
// import * as api from '../../apis';

export const listsTodos = () => async (dispatch: Dispatch) => {
	try {
		// const { data } = await api.listsTodos();
		// console.log(data);

		dispatch<TodosActionTypes>({
			type: TodosTypes.LISTS_TODOS,
			// payload: data.todos,
		});
	} catch (err) {
		console.log(err);
	}
};

export const listsTodo = (id: object) => async (dispatch: Dispatch) => {
	try {
		// const { data } = await api.listsTodo(id);
		// console.log(data);

		dispatch<TodosActionTypes>({
			type: TodosTypes.LISTS_TODO,
			// payload: data,
		});
	} catch (err) {
		console.log(err);
	}
};

export const createTodos = (task: object) => async (dispatch: Dispatch) => {
	try {
		// const { data } = await api.createTodos(task);
		dispatch<TodosActionTypes>({
			type: TodosTypes.CREATE_TODOS,
			payload: task,
		});
		// window.location = '/users/todos' as unknown as Location;
		// toast.success(data.message);
	} catch (err) {
		if (err.response && err.response.data) {
			return toast.error(err.response.data.error);
		}
		console.log(err);
	}
};

export const deleteTodo = (id: number) => async (dispatch: Dispatch) => {
	try {
		// const { data } = await api.deleteTodos(id);
		dispatch<TodosActionTypes>({
			type: TodosTypes.DELETE_TODOS,
			payload: id,
		});
		// toast.success(data.message);
	} catch (err) {
		if (err.response && err.response.data) {
			return toast.error(err.response.data.error);
		}
		console.log(err);
	}
};

export const editTodos =
	(todo_id: number, task: string) => async (dispatch: Dispatch) => {
		try {
			// const { data } = await api.editTodos(id, task);
			// console.log(data);

			dispatch<TodosActionTypes>({
				type: TodosTypes.EDIT_TODOS,
				payload: {todo_id, task},
			});
			// toast.success(data.message);
		} catch (err) {
			if (err.response && err.response.data) {
				return toast.error(err.response.data.error);
			}
			console.log(err);
		}
	};

export const toggleTodos = (todos: ITodos) => (dispatch: Dispatch) => {
	dispatch<TodosActionTypes>({
		type: TodosTypes.TOGGLE_TODOS,
		payload: todos,
	});
};
