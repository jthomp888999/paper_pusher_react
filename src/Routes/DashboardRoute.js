import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MainLayout from '../Layout/MainLayout';

const DashboardRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (auth.isLoading) {
        return <h1>Loading...</h1>;
      } else if (!auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else {
        return (
          <MainLayout>
            <Component {...props} />
          </MainLayout>
        );
      }
    }}
  />
);

const mapStatetoProps = state => ({
  auth: state.auth
});

export default connect(mapStatetoProps)(DashboardRoute);
