import React from "react";
import { Redirect, Route } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

let isAuthenticated;
try {
  const state = JSON.parse(localStorage.getItem("state"));
  isAuthenticated = state.auth.isAuthenticated;
} catch {
  isAuthenticated = false;
}

export const DashboardRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
