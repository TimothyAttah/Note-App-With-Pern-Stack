import { Dispatch } from 'redux';
import { TodosActionTypes } from '../actionsTypes/todosTypes';
import { ITodos } from '../Interface';
import { TodosTypes } from '../types';
import * as api from '../../apis';

export const listsTodos = () => async (dispatch: Dispatch) => {
 try {
   const { data } = await api.listsTodos();
   console.log(data);
   
   dispatch<TodosActionTypes>({
     type: TodosTypes.LISTS_TODOS,
     payload: data.todos
   })
 } catch (err) {
   console.log(err);
   
 }
}

export const createTodos = (task: object) => (dispatch: Dispatch) => {
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

export const editTodos = (id: string, todos: ITodos) => (dispatch: Dispatch) => {
  dispatch<TodosActionTypes>({
    type: TodosTypes.EDIT_TODOS,
    payload: {id, todos }
  })
}

export const toggleTodos = (todos: ITodos) => (dispatch: Dispatch) => {
  dispatch<TodosActionTypes>({
    type: TodosTypes.TOGGLE_TODOS,
    payload: todos
  })
}
