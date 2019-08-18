import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const state = JSON.parse(localStorage.getItem('state'));

const isAuthenticated = state.auth.isAuthenticated;

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
  {...rest} 
    render={props => isAuthenticated ? (
      <Component {...props} />
      ) : (
        <Redirect to="/login"/>
        )
  }
  />
);

