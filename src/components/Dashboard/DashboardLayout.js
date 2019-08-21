import React, { Component } from "react";
import { Layout } from "antd";

const { Content, Footer } = Layout;

class DashboardLayout extends Component {
  render() {
    return (
      <Layout >
        <Layout>
          <Content style={{ backgroundColor: "#fff" }}>
            <div style={{ minHeight: 360, textAlign: "center" }}>
              {this.props.children}
            </div>
          </Content>
 
        </Layout>
      </Layout>
    );
  }
}

export default DashboardLayout;
