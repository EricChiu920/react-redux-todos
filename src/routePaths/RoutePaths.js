import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TodoList from '../components/Todos/TodoList';

const RoutePaths = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/todos" />} />
      <Route path="/todos" render={() => <TodoList />} />
    </Switch>
  </React.Fragment>
);

export default RoutePaths;
