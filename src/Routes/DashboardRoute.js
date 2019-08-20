import React from "react";
import { Redirect, Route } from "react-router-dom";
import MainLayout from '../Layout/MainLayout'

const state = JSON.parse(localStorage.getItem("state"));

const isAuthenticated = state.auth.isAuthenticated;

export const DashboardRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <MainLayout >
          <Component {...props} />
        </MainLayout>
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
