import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

import Navigation from "./Navigation/Navigation";
import Cabinets from "../components/Dashboard/DashComponents/Cabinets";

const { Header, Content, Sider, Footer } = Layout;

class AppLayout extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header className="header" style={{ backgroundColor: "#F0F2F5" }}>
          <Navigation />
        </Header>
        <Sider style={{ backgroundColor: "#fff", position: "fixed" }}>
          <Cabinets />
        </Sider>
        <Content>
          <Layout style={{ background: "#fff" }}>
            <Content style={{ minHeight: 280, backgroundColor: "#fff" }}>
              {this.props.children}
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Designed with Ant Design <br /> Powered by Mayan EDMS
        </Footer>
      </Layout>
    );
  }
}

export default AppLayout;
