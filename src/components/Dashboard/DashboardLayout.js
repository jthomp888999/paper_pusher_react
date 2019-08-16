import React, { Component } from 'react';
import { Layout } from 'antd';

const { Content, Sider, Footer } = Layout

class DashboardLayout extends Component {

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider style={{ backgroundColor: "#fff", position: "fixed"}}>
          <h1>My Sider</h1>
        </Sider>
        <Layout>
          <Content style={{ backgroundColor: "#fff" }}>
            <div style={{ minHeight: 360, textAlign: "center" }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}><hr />Designed with Ant Design <br /> Powered by Mayan EDMS</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default DashboardLayout;