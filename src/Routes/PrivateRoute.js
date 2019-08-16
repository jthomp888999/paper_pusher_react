import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
  {...rest} 
    render={props => localStorage.getItem('state') ? (
      <Component {...props} />
      ) : (
        <Redirect to="/login"/>
        )
  }
  />
);