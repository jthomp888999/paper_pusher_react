<<<<<<< HEAD
import React from "react";
import { Redirect, Route } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

let isAuthenticated;
try {
  const state = JSON.parse(localStorage.getItem("state"));
=======
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';

let isAuthenticated;

try {
  const state = JSON.parse(localStorage.getItem('state'));
>>>>>>> ecfc2176c0e87b733d7a1b18b4cf499835f4136c
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
