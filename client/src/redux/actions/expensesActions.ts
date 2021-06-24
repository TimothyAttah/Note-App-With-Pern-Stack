import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { ExpensesActionTypes } from '../actionsTypes/expensesTypes';
import { ExpensesTypes } from '../types';
import * as api from '../../apis'

export const listsExpenses = () => async (dispatch: Dispatch) =>{
 try {
   const { data } = await api.listsExpenses();
   dispatch<ExpensesActionTypes>({
     type: ExpensesTypes.LISTS_EXPENSES,
     payload: data.expenses
   })
 } catch (err) {
   	if (err.response && err.response.data) {
			return toast.error(err.response.data.error);
		}
		console.log(err);
 }
}

export const createExpenses = (expenses: object) => async (dispatch: Dispatch) => {
 try {
   const { data } = await api.createExpenses(expenses);
   dispatch<ExpensesActionTypes>({
     type: ExpensesTypes.CREATE_EXPENSES,
     payload: data.results
   })
   toast.success(data.message);
 } catch (err) {
    	if (err.response && err.response.data) {
				return toast.error(err.response.data.error);
			}
			console.log(err);
 }
}

export const editExpenses = (id: string, expenses: object) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.editExpenses(id, expenses);
    dispatch<ExpensesActionTypes>({
      type: ExpensesTypes.EDIT_EXPENSES,
      payload: data.results
    })
    toast.success(data.message);
  } catch (err) {
     	if (err.response && err.response.data) {
				return toast.error(err.response.data.error);
			}
			console.log(err);
  }
}

export const deleteExpenses = (id: string) => async (dispatch: Dispatch) => {
 try {
   const { data } = await api.deleteExpenses(id);
   dispatch<ExpensesActionTypes>({
     type: ExpensesTypes.DELETE_EXPENSES,
     payload: id
   })
   toast.success(data.message);
 } catch (err) {
    	if (err.response && err.response.data) {
				return toast.error(err.response.data.error);
			}
			console.log(err);
 }
}
