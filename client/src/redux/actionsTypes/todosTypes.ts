import { TodosTypes } from '../types';

interface ListsTodos {
  type: TodosTypes.LISTS_TODOS;
}

interface CreateTodos {
  type: TodosTypes.CREATE_TODOS;
  payload: string;
}

interface EditTodos {
  type: TodosTypes.EDIT_TODOS;
  payload: string;
}

interface DeleteTodos {
  type: TodosTypes.DELETE_TODOS;
  payload: string;
}

export type TodosActionTypes = ListsTodos | CreateTodos | EditTodos | DeleteTodos
