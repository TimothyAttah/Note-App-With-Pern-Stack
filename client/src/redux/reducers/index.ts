import { combineReducers } from 'redux';
import { Auth, Notes } from '../InterfaceRedux';

import { notes } from './notes';
import { auth } from './auth';

export interface StoreState {
  notes: Notes;
  auth: Auth;
}

export const reducers = combineReducers({
  notes,
  auth
});
