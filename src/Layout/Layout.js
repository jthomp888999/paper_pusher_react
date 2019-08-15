import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import Navigation from './Navigation/Navigation';
import SideNav from './Sider/SideNav';

const { Header, Content, Sider } = Layout;
class AppLayout extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <Navigation />
        </Header>
        <Content>
          <Layout style={{ background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff', padding: '24px' }}>
              <SideNav />
            </Sider>
            <Content style={{ padding: '24px', minHeight: 280 }}>
              {this.props.children}
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

export default AppLayout;
