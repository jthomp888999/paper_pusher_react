import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Navigation from '../Navigation/Navigation';
import CabinetTree from '../Cabinets/CabinetTree';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = ({ children }) => (
  <Layout>
    <Header className="header">
      <Navigation />
    </Header>
    <Content>
      <Layout style={{ background: '#fff' }}>
        {/* Left Menu for cabints */}
        <Sider
          width={280}
          style={{
            background: '#fff',
            border: 'solid #F0F2F5 1px',
            minHeight: '800px',
          }}
        >
          <CabinetTree />
        </Sider>
        <Content
          style={{
            padding: '0 24px',
            minHeight: 280,
            textAlign: 'center',
          }}
        >
          {children}
        </Content>
        {/* Right Menu for Menu.. */}
        <Sider
          width={280}
          style={{
            background: '#fff',
            border: 'solid #F0F2F5 1px',
            minHeight: '800px',
          }}
        />
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Created by John Thompson <br /> Powered by Mayan EDMS
    </Footer>
  </Layout>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
