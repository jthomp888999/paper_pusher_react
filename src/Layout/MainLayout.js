import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import Navigation from './Navigation/Navigation';
import CabinetTree from '../components/Dashboard/DashComponents/CabinetTree'

const { Header, Content, Footer, Sider } = Layout;

class MainLayout extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <Navigation />
        </Header>
        <Content>
          <Layout style={{ background: "#fff" }}>
            <Sider
              width={280}
              style={{ 
                background: "#fff",
                border: "solid #F0F2F5 1px",
                minHeight: "800px" 
              }}
            >
              <CabinetTree />
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280, textAlign: "center" }}>
              {this.props.children}
            </Content>
            <Sider
              width={280}
              style={{
                background: "#fff",
                border: "solid #F0F2F5 1px",
                minHeight: "800px"
              }}
            />
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Created by John Thompson <br/> Powered by Mayan EDMS
    </Footer>
      </Layout>
    );
  }
}

export default MainLayout;