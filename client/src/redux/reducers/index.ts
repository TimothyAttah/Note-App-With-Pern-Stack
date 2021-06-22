import { combineReducers } from 'redux';
import { InitialExpenses, InitialTodos, InitialUser } from '../Interface';
import {authReducer} from './authReducer';
import { expensesReducer } from './expensesReducer';
import {todosReducer} from './todosReducer';

export interface StoreState {
	todos: InitialTodos;
	auth: InitialUser;
	expenses: InitialExpenses;
}

export const reducers = combineReducers({
	todos: todosReducer,
	auth: authReducer,
	expenses: expensesReducer
});
