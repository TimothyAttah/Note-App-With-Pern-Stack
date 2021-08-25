import { TodosTypes } from '../types';
import { InitialTodos } from '../InterfaceRedux';
import { TodosActionTypes } from '../actionsTypes/todosTypes';
import { v4 } from 'uuid';

const initialState: InitialTodos = {
	todos: [
		{
			todo_id: v4(),
			task: 'Buy milk',
			isComplete: true,
			date: new Date(),
		},
		{
			todo_id: v4(),
			task: 'Finish homework',
			isComplete: false,
			date: new Date(),
		},
		{
			todo_id: v4(),
			task: 'Take out trash',
			isComplete: true,
			date: new Date(),
		},
		{
			todo_id: v4(),
			task: 'Build your projects',
			isComplete: false,
			date: new Date(),
		},
	],
	isLoading: false,
};

export const todos = (state = initialState, action: TodosActionTypes) => {
	switch (action.type) {
		case TodosTypes.LISTS_TODOS:
		case TodosTypes.LISTS_TODO:
			return {
				...state,
				// todos: action.payload,
			};

		case TodosTypes.CREATE_TODOS:
			return {
				...state,
				todos: [action.payload, ...state.todos],
			};
		case TodosTypes.EDIT_TODOS:
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.todo_id === action.payload.todo_id ? action.payload : todo
				),
			};

		case TodosTypes.DELETE_TODOS:
			console.log('delete todos is here');

			return {
				...state,
				todos: state.todos.filter(todo => todo.todo_id !== action.payload),
			};
		case TodosTypes.TOGGLE_TODOS:
			return {
				...state,
				todos: state.todos.map(todo =>
					todo === action.payload
						? { ...todo, isComplete: !todo.isComplete }
						: todo
				),
			};
		default:
			return state;
	}
};
