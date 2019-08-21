import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    const { isAuthenticated } = this.props;
    const authLinks = (
      <Menu.Item key="2">
        <Link to="/logout">Log Out</Link>
      </Menu.Item>
    );

    const noAuthLinks = (
      <Menu.Item key="2">
        <Link to="/login">Login</Link>
      </Menu.Item>
    );

    return (
      <Menu
        mode="horizontal"
        theme="dark"
        style={{ lineHeight: '64px' }}>
        <Menu.Item key="1" style={{ float: 'left', fontSize: "24px" }}>
          <Link to="/">
            paper_pusher
          </Link>
        </Menu.Item>
        <Menu.Item style={{ float: 'right' }}>
          {isAuthenticated ? authLinks : noAuthLinks}
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  username: state.auth.username
});

export default connect(mapStateToProps)(Navigation);
