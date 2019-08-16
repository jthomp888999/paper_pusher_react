import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from '../Routes/PrivateRoute';
import Dashboard from '../components/Dashboard/Dashboard';
import Login from '../components/Login/Login';
import Logout from '../components/Login/Logout';

class routes extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/logout" component={Logout} />
      </Switch>
    );
  }
}

export default routes;
