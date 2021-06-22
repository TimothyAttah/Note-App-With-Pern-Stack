import { ExpensesTypes } from '../types';

interface ListsExpenses {
  type: ExpensesTypes.LISTS_EXPENSES;
}

interface CreateExpenses {
  type: ExpensesTypes.CREATE_EXPENSES;
  payload: object;
}

interface EditExpenses {
  type: ExpensesTypes.EDIT_EXPENSES;
  payload: object;
}

interface DeleteExpenses {
  type: ExpensesTypes.DELETE_EXPENSES;
  payload: number | string;
}

export type ExpensesActionTypes = ListsExpenses | CreateExpenses | EditExpenses | DeleteExpenses