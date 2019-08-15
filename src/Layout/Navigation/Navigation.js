import React, { Component } from 'react';
import { Menu } from 'antd';

class Navigation extends Component {
  render() {
    return (
      <Menu mode="horizontal" theme="dark" style={{ lineHeight: '64px' }}>
        <Menu.Item key="1">
          <li>Paper_Pusher</li>
        </Menu.Item>
        <Menu.Item key="2" style={{ float: 'right' }}>
          <li>Login</li>
        </Menu.Item>
        <Menu.Item key="3" style={{ float: 'right' }}>
          <li>Logout</li>
        </Menu.Item>
      </Menu>
    );
  }
}
export default Navigation;
