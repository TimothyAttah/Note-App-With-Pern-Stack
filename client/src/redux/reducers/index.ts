import { combineReducers } from 'redux';
import { Auth, Notes, Posts, User } from '../InterfaceRedux';

import { notes } from './notes';
import { auth } from './auth';
import { posts } from './posts';
import { user } from './user';


export interface StoreState {
	todos: any;
  notes: Notes;
  auth: Auth;
  posts: Posts;
  user: User;
}

export const reducers = combineReducers({
  notes,
  auth,
  posts,
  user
});
