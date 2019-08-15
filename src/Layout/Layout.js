import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header, Content, Sider } = Layout;
class AppLayout extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <h1>NavBar</h1>
        </Header>
        <Content>
          <Layout style={{ background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <h1>Tree</h1>
            </Sider>
            <Content style={{ padding: '24px', minHeight: 280 }}>
              <h1>Content</h1>
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

export default AppLayout;
