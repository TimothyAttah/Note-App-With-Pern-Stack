import { combineReducers } from 'redux';
import { ITodos } from '../Interface';
import todosReducer from './todosReducer';

export interface StoreState {
  todos: ITodos
}

const reducers = combineReducers({
  todos: todosReducer
});

export default reducers;
