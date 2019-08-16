import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../components/Dashboard/Dashboard';
import Login from '../components/Login/Login';

class routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}

export default routes;
