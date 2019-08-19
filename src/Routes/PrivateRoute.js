import React from "react";
import { Redirect, Route } from "react-router-dom";
import DashboardLayout from "../components/Dashboard/DashboardLayout";

const state = JSON.parse(localStorage.getItem("state"));

const isAuthenticated = state.auth.isAuthenticated;

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <DashboardLayout>
          <Component {...props} />
        </DashboardLayout>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
