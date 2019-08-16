import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutUser } from '../../redux/Actions/authActions';


class Logout extends Component {

  render() {
    return (
      <React.Fragment>
        {this.props.dispatch(logoutUser())}
        <Redirect to="/login" />

      </React.Fragment>

    )
  }
}

export default connect()(Logout);