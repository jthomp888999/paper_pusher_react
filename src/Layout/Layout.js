import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

import Navigation from './Navigation/Navigation';

const { Header, Content } = Layout;

class AppLayout extends Component {
  render() {
    return (
      <Layout>
        <Header className="header" style={{backgroundColor: "#fff" }}>
          <Navigation />
        </Header>
        <Content>
          <Layout style={{ background: '#fff' }}>
            <Content style={{ minHeight: 280, backgroundColor: "#fff" }}>
              {this.props.children}
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

export default AppLayout;
