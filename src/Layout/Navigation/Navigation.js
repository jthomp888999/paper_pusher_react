import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
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
        theme="light"
        style={{ lineHeight: '64px', backgroundColor: '#F0F2F5' }}>
        <Menu.Item key="1" style={{ float: 'left' }}>
          <Link to="/">
            paper_pusher
            {<Icon type="paper-clip" />}
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
