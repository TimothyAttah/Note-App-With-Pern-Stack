import { v4 } from 'uuid'
import { ExpensesActionTypes } from '../actionsTypes/expensesTypes'
import { InitialExpenses } from '../Interface'
import { ExpensesTypes } from '../types'

const initialState: InitialExpenses  = {
  expenses: [
    {
      id: v4(),
      description: 'Bought car',
      value: 5000
    },
    {
      id: v4(),
      description: 'Paid house rent',
      value: 2000
    },
    {
      id: v4(),
      description: 'Groceries',
      value: 1000
    },
  ]
}

export const expensesReducer = (state = initialState, action: ExpensesActionTypes) => {
  switch (action.type) {
    case ExpensesTypes.LISTS_EXPENSES:
      return {
        ...state
      };
    case ExpensesTypes.CREATE_EXPENSES:
      return {
        ...state,
        expenses: [action.payload, ...state.expenses]
      };
    case ExpensesTypes.EDIT_EXPENSES:
      return {
        ...state,
        expenses: state.expenses.map(expense => expense.id === action.payload.id ? action.payload : expense)
      };
    case ExpensesTypes.DELETE_EXPENSES:
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.id !== action.payload)
      };
    default:
      return state;
  }
};
