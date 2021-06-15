import { Dispatch } from 'redux';
import { TodosActionTypes } from '../actionsTypes/todosTypes';
import { TodosTypes } from '../types';

export const listsTodos = () => (dispatch: Dispatch) => {
  dispatch<TodosActionTypes>({
    type: TodosTypes.LISTS_TODOS,
  });
}

export const createTodos = (task: string) => (dispatch: Dispatch) => {
  dispatch<TodosActionTypes>({
    type: TodosTypes.CREATE_TODOS,
    payload: task
  })
}

export const deleteTodos = (id: string) => (dispatch: Dispatch) => {
  dispatch<TodosActionTypes>({
    type: TodosTypes.DELETE_TODOS,
    payload: id
  })
}

export const editTodos = (task: string) => (dispatch: Dispatch) => {
  dispatch<TodosActionTypes>({
    type: TodosTypes.EDIT_TODOS,
    payload: task
  })
}
