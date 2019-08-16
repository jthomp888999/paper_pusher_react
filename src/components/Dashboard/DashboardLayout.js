import React, { Component } from 'react';
import { Layout } from 'antd';

const { Content, Sider } = Layout

class DashboardLayout extends Component {

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider >
          <h1>My Sider</h1>
        </Sider>
        <Layout>
          <Content >
            <div style={{ minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DashboardLayout;