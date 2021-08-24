import { combineReducers } from 'redux';
import { InitialTodos, Notes } from '../InterfaceRedux';

import { notes } from './notes';
import { todos } from './todos';

export interface StoreState {
  notes: Notes,
  todos: InitialTodos
}

export const reducers = combineReducers({
  notes,
  todos
});
