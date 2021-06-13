import { TodosTypes } from '../types'
import { InitialTodos } from '../Interface'
import { TodosActionTypes } from '../actionsTypes/todosTypes';
import { v4 } from 'uuid';

const initialState: InitialTodos = {
  todos: [
    {
      id: v4(),
      task: 'Go to church',
      isComplete: true,
      date: 'Today at 12:00'
    },
    {
      id: v4(),
      task: 'Submit assignment',
      isComplete: false,
       date: 'Today at 12:00'
    },
    {
      id: v4(),
      task: 'Build your house',
      isComplete: false,
       date: 'Today at 12:00'
    },
    {
      id: v4(),
      task: 'Get a job',
      isComplete: true,
       date: 'Today at 12:00'
    },
  ],
  isLoading: false
}


const todosReducer = (state = initialState, action: TodosActionTypes) => {
  switch (action.type) {
    case TodosTypes.LISTS_TODOS:
      return state;
    case TodosTypes.CREATE_TODOS:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case TodosTypes.EDIT_TODOS:
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload ? action.payload : todo)
      };
    case TodosTypes.DELETE_TODOS:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
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

export default todosReducer;
