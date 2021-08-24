import { combineReducers } from 'redux';
import { Notes } from '../InterfaceRedux';

import { notes } from './notes';

export interface StoreState {
  notes: Notes
}

export const reducers = combineReducers({
  notes
});
