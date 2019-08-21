import React from "react";
import { Redirect, Route } from "react-router-dom";
<<<<<<< HEAD:src/Routes/PrivateRoute.js
import AppLayout from "../Layout/Layout";
=======
import MainLayout from '../Layout/MainLayout'
>>>>>>> c0a9425ea8813aaa30c6902b3d042750154b7a38:src/Routes/DashboardRoute.js

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
<<<<<<< HEAD:src/Routes/PrivateRoute.js
        <AppLayout>
          <Component {...props} />
        </AppLayout>
=======
        <MainLayout >
          <Component {...props} />
        </MainLayout>
>>>>>>> c0a9425ea8813aaa30c6902b3d042750154b7a38:src/Routes/DashboardRoute.js
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
