import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../NotFound';
import DashboardRoute from './DashboardRoute';
import Dashboard from '../Dashboard';
import { Login, Logout } from '../auth';
import CabinetContents from '../Cabinets';

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
