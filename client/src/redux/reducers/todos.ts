import { TodosTypes } from '../types';
import { InitialTodos, ITodos } from '../InterfaceRedux';
import { TodosActionTypes } from '../actionsTypes/todosTypes';
import { v4 } from 'uuid';

const initialState: InitialTodos = {
  todos: [
    {
      todo_id: v4(),
      task: 'Go to church',
      isComplete: false,
      date: new Date(),
    },
    {
      todo_id: v4(),
      task: 'Finish homework on unbird',
      isComplete: true,
      date: new Date(),
    },
    {
      todo_id: v4(),
      task: 'Create an instagram-clone app',
      isComplete: false,
      date: new Date(),
    },
    {
      todo_id: v4(),
      task: 'Create a todo app',
      isComplete: false,
      date: new Date(),
    },
    {
      todo_id: v4(),
      task: 'Eat your food',
      isComplete: true,
      date: new Date(),
    },
  ],
  isLoading: false,
};

export const todos = (state = initialState, action: TodosActionTypes) => {
  switch (action.type) {
    case TodosTypes.TODOS_LISTS:
    case TodosTypes.TODO_LIST:
      return {
        ...state,
      };

    case TodosTypes.TODO_CREATE:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case TodosTypes.TODO_EDIT:
      return {
        ...state,
        todos: state.todos.map((todo: { todo_id: string | number }) =>
          todo.todo_id === action.payload.todo_id ? action.payload : todo,
        ),
      };

    case TodosTypes.TODO_DELETE:
      return {
        ...state,
        todos: state.todos.filter(
          (todo: { todo_id: string | number }) =>
            todo.todo_id !== action.payload,
        ),
      };
    case TodosTypes.TODO_TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo: ITodos) =>
          todo === action.payload
            ? { ...todo, isComplete: !todo.isComplete }
            : todo,
        ),
      };
    default:
      return state;
  }
};
