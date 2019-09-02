import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';
import DashboardRoute from './DashboardRoute';
import Dashboard from '../components/Dashboard/Dashboard';
import Login from '../components/Login/Login';
import Logout from '../components/Login/Logout';
import CabinetContents from '../components/Dashboard/DashComponents/CabinetContents';

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
