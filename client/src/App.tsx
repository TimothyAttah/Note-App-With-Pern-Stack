import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Header } from './components/header/Header';
import { user } from './components/NameInitials';
import { PostDelete } from './components/post/PostDelete';
import history from './history';
import { Home } from './pages/home/Home';
import { Notes } from './pages/notes/Notes';
import { NotesCreate } from './pages/notes/NotesCreate';
import { NotesDelete } from './pages/notes/NotesDelete';
import { NotesRead } from './pages/notes/NotesRead';
import { UserNotes } from './pages/notes/UserNotes';
import { MyProfile } from './pages/profile/MyProfile';
import { UserProfile } from './pages/profile/UserProfile';
import { Signin } from './pages/user/Signin';
import { Signup } from './pages/user/Signup';
import { getUsers } from './redux/actions/auth';

export const App = () => {
	toast.configure();
	const dispatch = useDispatch();
	useEffect(() => {
		if (user !== null) {
			dispatch(getUsers());
		} else {
			history.push('/users/signin');
		}
	}, [dispatch]);
	return (
		<>
			<Router history={history}>
				<Header />
				<Switch>
					<Route path='/' exact>
						{user ? <Home /> : <Signin />}
					</Route>
					<Route path='/users/profile/:username' exact>
						<MyProfile />
					</Route>
					<Route path='/users/:id/user/profile' exact>
						<UserProfile />
					</Route>
					<Route path='/users/notes' exact>
						<Notes />
					</Route>
					<Route path='/users/notes/create/note'>
						<NotesCreate />
					</Route>
					<Route path='/users/notes/:noteId/note/delete'>
						<NotesDelete />
					</Route>
					<Route path='/users/posts/:postId/post/delete'>
						<PostDelete />
					</Route>
					<Route path='/users/notes/:noteId/note/read'>
						<NotesRead />
					</Route>
					<Route path='/users/profile/notes/my-notes'>
						<UserNotes />
					</Route>
					<Route path='/users/signup'>
						{user ? <Redirect to='/' /> : <Signup />}
					</Route>
					<Route path='/users/signin'>
						{user ? <Redirect to='/' /> : <Signin />}
					</Route>
					{/* <Route path='/' exact component={Home} />
					<Route path='/users/signin' exact component={Signin} />
					<Route path='/users/signup' exact component={Signup} />
					<Route path='/users/notes' exact component={Notes} />
					<Route
						path='/users/notes/create/note'
						exact
						component={NotesCreate}
					/>
					<Route path='/users/profile/:username' exact component={Profile} /> */}
				</Switch>
			</Router>
		</>
	);
};
