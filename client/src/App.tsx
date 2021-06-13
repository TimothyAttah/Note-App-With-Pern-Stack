import React, { FC, Fragment } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/Headers';
import history from './history';
import Todos from './pages/todos/Todos';
import SignIn from './pages/users/SignIn';
import SignUp from './pages/users/SignUp';


const App: FC = () => {
  return (
    <Fragment>
      <Router history={history}>
      <Header />
        <Switch>
          <Route path='/auth/users/signin' exact component={SignIn}/>
          <Route path='/auth/users/signup' exact component={SignUp} />
          <Route path='/users/todos' exact component={Todos} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
