import React, { Component } from "react";
<<<<<<< HEAD
import { Switch, Route, Redirect } from "react-router-dom";
import { PrivateRoute } from "../Routes/PrivateRoute";
=======
import { Switch, Route } from "react-router-dom";
import { DashboardRoute } from "./DashboardRoute";
>>>>>>> c0a9425ea8813aaa30c6902b3d042750154b7a38
import Dashboard from "../components/Dashboard/Dashboard";
import CabinetContents from "../components/Dashboard/DashComponents/Cabinets";
import Login from "../components/Login/Login";
import Logout from "../components/Login/Logout";
import CabinetContents from "../components/Dashboard/DashComponents/CabinetContents";

class routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
<<<<<<< HEAD
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
=======
        <DashboardRoute exact path="/" component={Dashboard} />
        <DashboardRoute exact path="/logout" component={Logout} />
        <DashboardRoute exact path="/cabinets/:id" component={CabinetContents} />
>>>>>>> c0a9425ea8813aaa30c6902b3d042750154b7a38
      </Switch>
    );
  }
}

export default routes;
