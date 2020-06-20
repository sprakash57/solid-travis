import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Auth from './components/screens/Auth';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
