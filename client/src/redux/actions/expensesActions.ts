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
}

export const editExpenses = (id: number, expenses: object) => (dispatch: Dispatch) => {
  dispatch<ExpensesActionTypes>({
    type: ExpensesTypes.EDIT_EXPENSES,
    payload: {id, expenses}
  })
}

export const deleteExpenses = (id: number) => (dispatch: Dispatch) => {
  dispatch<ExpensesActionTypes>({
    type: ExpensesTypes.DELETE_EXPENSES,
    payload: id
  })
}
