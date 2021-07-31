import { ExpensesActionTypes } from '../actionsTypes/expensesTypes'
import { InitialExpenses } from '../Interface'
import { ExpensesTypes } from '../types'

const initialState: InitialExpenses  = {
  expenses: []
}

export const expensesReducer = (state = initialState, action: ExpensesActionTypes) => {
  switch (action.type) {
    case ExpensesTypes.LISTS_EXPENSES:
      return {
        ...state,
        expenses: action.payload
      };
    case ExpensesTypes.CREATE_EXPENSES:
      return {
        ...state,
        expenses: [action.payload, ...state.expenses]
      };
    case ExpensesTypes.EDIT_EXPENSES:
      return {
        ...state,
        expenses: state.expenses.map(expense => expense.expenses_id === action.payload.id ? action.payload : expense)
      };
    case ExpensesTypes.DELETE_EXPENSES:
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense.expenses_id !== action.payload)
      };
    default:
      return state;
  }
};
