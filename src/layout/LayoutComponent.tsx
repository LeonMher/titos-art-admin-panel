import React from 'react';
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  HomeFilled,
} from '@ant-design/icons';
import { Link, Route, Routes } from 'react-router-dom';

import About from '../pages/Projects';
import Dashboard from '../pages/Dashboard';

const { Sider, Content, Footer } = Layout;

interface LayoutComponentProps {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

const items = [
  { key: '1', icon: <HomeFilled />, label: <Link to="/">Dashboard</Link> },
  { key: '2', icon: <PieChartOutlined />, label: <Link to="/about">Projects</Link> },
];

const LayoutComponent: React.FC<LayoutComponentProps> = ({ collapsed, setCollapsed }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" items={items} />
      </Sider>
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Mher Tsatinyan ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;