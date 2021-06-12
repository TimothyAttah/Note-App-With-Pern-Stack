import React, { FC, Fragment } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Headers';
import history from './history';


const App: FC = () => {
  return (
    <Fragment>
      <Router history={history}>
      <Header />
        <Switch></Switch>
      </Router>
    </Fragment>
  );
}

export default App;
