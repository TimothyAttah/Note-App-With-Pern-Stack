import React, { FC, Fragment, useEffect } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import {useDispatch} from 'react-redux'

import {Headers} from './components/header/Headers';
import history from './history';
import {Todos} from './pages/todos/Todos';
import SignIn from './pages/users/SignIn';
import SignUp from './pages/users/SignUp';
import { user} from './components/NameInitial';
import { getUsers } from './redux/actions/authActions';
import {Nav} from './components/nav/Nav'
import { Budgets } from './pages/budgets/Budgets';


const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(getUsers())
    } else {
      history.push('/auth/users/signin');
    }
  },[dispatch])
  return (
		<Fragment>
			<Router history={history}>
				<Headers />
				{user && <Nav />}
				{user ? (
					<Switch>
						<Route path='/users/todos' exact component={Todos} />
            <Route path='/users/todos/:todosId' component={Todos} />
            <Route path='/users/budgets' exact component={Budgets} />
            <Redirect to='/users/todos' />
					</Switch>
				) : (
					<Switch>
						<Route path='/auth/users/signin' exact component={SignIn} />
						<Route path='/auth/users/signup' exact component={SignUp} />
						{/* <Redirect to='/auth/users/signin' /> */}
					</Switch>
				)}
				{/* <Switch>
          <Route path='/auth/users/signin' exact component={SignIn}/>
          <Route path='/auth/users/signup' exact component={SignUp} />
          <Route path='/users/todos' exact component={Todos} />
          <Route path='/users/todos/:todosId' component={Todos} />
        </> */}
			</Router>
		</Fragment>
	);
}

export default App;
