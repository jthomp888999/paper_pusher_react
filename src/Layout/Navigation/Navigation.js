import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class Navigation extends Component {
  
  render() {


   const authLinks = (
      <Menu.Item key="2">
        <Link to="/logout">Log Out</Link>
      </Menu.Item>
    )

   const noAuthLinks = (
      <Menu.Item key="2">
        <Link to="/login">Login</Link>
      </Menu.Item>
    )

    return (
      <Menu mode="horizontal" theme="dark" style={{ lineHeight: '64px' }}>
        <Menu.Item key="1" style={{ float: "left" }}>
          <Link to="/">
            paper_pusher 
            {<Icon type="paper-clip" />}
            </Link>
          <Menu.Divider type="virtical"/>
        </Menu.Item>
        <SubMenu title={
          <span>
            <Icon type="user" />
            Accounts
            </span>
        }
          style={{ float: "right" }}
        >
          <Menu.ItemGroup>
            <Menu.Item>
              <Link to="#">Username: {this.props.username}</Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup>
            <Menu.Item>
              {this.props.isAuthenticated ? authLinks : noAuthLinks}
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  username: state.auth.username
});


export default connect(mapStateToProps)(Navigation);
