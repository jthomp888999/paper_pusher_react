import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import logoutUser from '../redux/Actions';

const Logout = ({ dispatch }) => {
  return (
    <>
      {dispatch(logoutUser())}
      <Redirect to="/login" />
    </>
  );
};

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Logout);
