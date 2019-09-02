import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import DashboardRoute from './DashboardRoute';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Logout from '../Login/Logout';
import CabinetContents from '../Cabinets/CabinetContents';

const routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <DashboardRoute exact path="/" component={Dashboard} />
      <DashboardRoute exact path="/logout" component={Logout} />
      <DashboardRoute
        exact
        path="/cabinets/:id"
        component={CabinetContents}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default routes;
