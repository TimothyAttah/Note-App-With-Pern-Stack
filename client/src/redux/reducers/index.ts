import { combineReducers } from 'redux';
import { InitialTodos, InitialUser } from '../Interface';
import authReducer from './authReducer';
import todosReducer from './todosReducer';

export interface StoreState {
	todos: InitialTodos;
	auth: InitialUser;
}

const reducers = combineReducers({
	todos: todosReducer,
	auth: authReducer
});

export default reducers;
