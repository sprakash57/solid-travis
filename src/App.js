import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Auth from './components/screens/Auth';
import Workflow from './components/screens/Workflow';
import PrivateRoute from './routes/PrivateRoute';
import Task from './components/screens/Task';
import NavHeader from './components/common/NavHeader';

function App() {
  return (
    <BrowserRouter>
      <NavHeader />
      <Switch>
        <Route exact path='/' component={Auth} />
        <PrivateRoute exact path='/workflow' component={Workflow} />
        <PrivateRoute exact path='/workflow/:id' component={Task} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
