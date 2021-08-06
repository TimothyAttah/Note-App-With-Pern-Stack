import { combineReducers } from 'redux';
import {
	InitialExpenses,
	InitialIncomes,
	InitialTodos,
	InitialUser,
} from '../Interface';
import { authReducer } from './authReducer';
import { expensesReducer } from './expensesReducer';
import { incomesReducer } from './incomesReducer';
import { todosReducer } from './todosReducer';

export interface StoreState {
	todos: InitialTodos;
	auth: InitialUser;
	expenses: InitialExpenses;
	incomes: InitialIncomes;
}

export const reducers = combineReducers({
	todos: todosReducer,
	auth: authReducer,
	expenses: expensesReducer,
	incomes: incomesReducer,
});
