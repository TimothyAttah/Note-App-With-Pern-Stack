import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { ExpensesActionTypes } from '../actionsTypes/expensesTypes';
import { ExpensesTypes } from '../types';

export const listsExpenses = () => (dispatch: Dispatch) =>{
  dispatch<ExpensesActionTypes>({
    type: ExpensesTypes.LISTS_EXPENSES
  })
}

export const createExpenses = (expenses: object) => (dispatch: Dispatch) => {
  dispatch<ExpensesActionTypes>({
    type: ExpensesTypes.CREATE_EXPENSES,
    payload: expenses
  })
  toast.success('New expenses added...');
}

export const editExpenses = (id: string, expenses: object) => (dispatch: Dispatch) => {
  dispatch<ExpensesActionTypes>({
    type: ExpensesTypes.EDIT_EXPENSES,
    payload: {id, expenses}
  })
}

export const deleteExpenses = (id: string) => (dispatch: Dispatch) => {
  dispatch<ExpensesActionTypes>({
    type: ExpensesTypes.DELETE_EXPENSES,
    payload: id
  })
  toast.success('Expenses deleted...');
}
