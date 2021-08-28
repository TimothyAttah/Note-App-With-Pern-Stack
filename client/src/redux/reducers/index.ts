import { combineReducers } from 'redux';
import { Auth, Notes, Posts } from '../InterfaceRedux';

import { notes } from './notes';
import { auth } from './auth';
import { posts } from './posts';


export interface StoreState {
  notes: Notes;
  auth: Auth;
  posts: Posts
}

export const reducers = combineReducers({
  notes,
  auth,
  posts
});
