import React from "react";
import { Layout, Menu } from "antd";
import { PieChartOutlined, HomeFilled } from "@ant-design/icons";
import { Link, Route, Routes } from "react-router-dom";

import Intro from "../pages/Intro";
import Dashboard from "../pages/Dashboard";
import ProfilePic from "../pages/ProfilePic";

const { Sider, Content, Footer } = Layout;

interface LayoutComponentProps {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

const items = [
  { key: "1", icon: <HomeFilled />, label: <Link to="/">Dashboard</Link> },
  {
    key: "2",
    icon: <PieChartOutlined />,
    label: <Link to="/intro">Intro</Link>,
  },
  {
    key: "3",
    icon: <PieChartOutlined />,
    label: <Link to="/profile-pic">Profile Pic</Link>,
  },
];

const LayoutComponent: React.FC<LayoutComponentProps> = ({
  collapsed,
  setCollapsed,
}) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" items={items} />
      </Sider>
      <Layout
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Content style={{ margin: "0 16px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/profile-pic" element={<ProfilePic />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Mher Tsatinyan ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
