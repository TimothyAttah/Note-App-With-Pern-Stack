import { combineReducers } from 'redux';
<<<<<<< HEAD
import { InitialTodos, Notes } from '../InterfaceRedux';

import { notes } from './notes';
import { todos } from './todos';

export interface StoreState {
  notes: Notes,
  todos: InitialTodos
=======
import { Auth, Notes, Posts, User } from '../InterfaceRedux';

import { notes } from './notes';
import { auth } from './auth';
import { posts } from './posts';
import { user } from './user';


export interface StoreState {
  notes: Notes;
  auth: Auth;
  posts: Posts;
  user: User;
>>>>>>> User-Feature
}

export const reducers = combineReducers({
  notes,
<<<<<<< HEAD
  todos
=======
  auth,
  posts,
  user
>>>>>>> User-Feature
});
