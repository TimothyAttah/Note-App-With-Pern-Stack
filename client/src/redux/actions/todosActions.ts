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

export const createTodos = (task: object) => async (dispatch: Dispatch) => {
 try {
   const { data } = await api.createTodos(task);
   dispatch<TodosActionTypes>({
     type: TodosTypes.CREATE_TODOS,
     payload: data.results
   })
   window.location = '/users/todos' as unknown as Location;
 } catch (err) {
   console.log(err);
   
 }
}

export const deleteTodo = (id: number ) => async (dispatch: Dispatch) => {
 try {
   const { data } = await api.deleteTodos(id);
   dispatch<TodosActionTypes>({
     type: TodosTypes.DELETE_TODOS,
     payload: id
   })
    console.log(data);
 } catch (err) {
   console.log(err);
 }
}

export const editTodos = (id: number, task: string) => async (dispatch: Dispatch) => {
 try {
   const { data } = await api.editTodos(id, task);
   console.log(data);
   
   dispatch<TodosActionTypes>({
     type: TodosTypes.EDIT_TODOS,
     payload: data.results
   })
 } catch (err) {
   console.log(err);
   
 }
}

export const toggleTodos = (todos: ITodos) => (dispatch: Dispatch) => {
  dispatch<TodosActionTypes>({
    type: TodosTypes.TOGGLE_TODOS,
    payload: todos
  })
}
