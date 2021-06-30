import { TodosTypes } from '../types'
import { InitialTodos } from '../Interface'
import { TodosActionTypes } from '../actionsTypes/todosTypes';


const initialState: InitialTodos = {
	todos: [
		// {
		// 	todo_id: v4(),
		// 	task: 'Get a job',
		// 	isComplete: true,
		// 	date: 'Today at 12:00',
		// },
	],
	isLoading: false,
};


export const todosReducer = (state = initialState, action: TodosActionTypes) => {
  switch (action.type) {
    case TodosTypes.LISTS_TODOS:
    case TodosTypes.LISTS_TODO:
			return {
				...state,
				todos: action.payload
			}
		
    case TodosTypes.CREATE_TODOS:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case TodosTypes.EDIT_TODOS:
      return {
        ...state,
        todos: state.todos.map(todo => todo.todo_id === action.payload.todo_id ? action.payload : todo)
			};
		
		case TodosTypes.DELETE_TODOS:
			console.log('delete todos is here');
			
      return {
        ...state,
        todos: state.todos.filter(todo => todo.todo_id !== action.payload)
      };
    case TodosTypes.TOGGLE_TODOS:
      return {
        ...state,
        todos: state.todos.map(todo => todo === action.payload ? { ...todo, isComplete: !todo.isComplete } : todo)
      }
		default:
			return state;
	}
};
