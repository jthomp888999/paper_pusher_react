/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MainLayout from '../Layout/MainLayout';

const DashboardRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    render={props => {
      if (auth.isLoading) {
        return <h1>Loading...</h1>;
      }
      if (!auth.isAuthenticated) {
        return <Redirect to="/login" />;
      }
      return (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      );
    }}
  />
);

DashboardRoute.propTypes = {
  auth: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }).isRequired,
  component: PropTypes.node.isRequired,
};

const mapStatetoProps = state => ({
  auth: state.auth,
});

export default connect(mapStatetoProps)(DashboardRoute);
