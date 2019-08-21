import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { PrivateRoute } from "../Routes/PrivateRoute";
import Dashboard from "../components/Dashboard/Dashboard";
import CabinetContents from "../components/Dashboard/DashComponents/Cabinets";
import Login from "../components/Login/Login";
import Logout from "../components/Login/Logout";

class routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/logout" component={Logout} />
        <PrivateRoute
          exact
          path="/cabinet-contents/:id"
          component={CabinetContents}
        />
      </Switch>
    );
  }
}

export default routes;
