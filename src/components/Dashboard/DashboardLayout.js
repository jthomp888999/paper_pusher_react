import React, { Component } from 'react';
import { Layout } from 'antd';
import Cabinets from '../Dashboard/DashComponents/Cabinets';

const { Content, Sider, Footer } = Layout

class DashboardLayout extends Component {

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider style={{ backgroundColor: "#fff", position: "fixed"}}>
          <Cabinets />
        </Sider>
        <Layout>
          <Content style={{ backgroundColor: "#fff" }}>
            <div style={{ minHeight: 360, textAlign: "center" }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}><hr />Designed with Ant Design <br /> Powered by Mayan EDMS</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default DashboardLayout;