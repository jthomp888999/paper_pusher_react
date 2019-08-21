import React from "react";
import { Redirect, Route } from "react-router-dom";
import AppLayout from "../Layout/Layout";

let isAuthenticated;
try {
  const state = JSON.parse(localStorage.getItem("state"));
  isAuthenticated = state.auth.isAuthenticated;
} catch {
  isAuthenticated = false;
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <AppLayout>
          <Component {...props} />
        </AppLayout>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
