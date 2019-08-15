import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <Menu mode="horizontal" theme="dark" style={{ lineHeight: '64px' }}>
        <Menu.Item key="1">
          <Link to="/">paper_pusher</Link>
        </Menu.Item>
        <Menu.Item key="2" style={{ float: 'right' }}>
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="3" style={{ float: 'right' }}>
          <li>Logout</li>
        </Menu.Item>
      </Menu>
    );
  }
}
export default Navigation;
