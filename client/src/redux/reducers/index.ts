import { combineReducers } from 'redux';
import { InitialTodos } from '../Interface';
import todosReducer from './todosReducer';

export interface StoreState {
	todos: InitialTodos;
}

const reducers = combineReducers({
	todos: todosReducer,
});

export default reducers;
