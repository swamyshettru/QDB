import React, { useEffect, useState } from "react";
import "../../App.css";
import {
  UserOutlined,
  DashboardOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Space, Avatar } from "antd";
import logo from "../../images/logo.png";
import { useHistory } from "react-router-dom";
import { getRandomNumber } from "../../Helper/Utils";
import { fetchData } from "../../api/fetchGet";

const { Sider } = Layout;

const Sidebar = () => {
  let history = useHistory();

  type Users = {
    name: string;
    email: string;
  };

  const [user, setUser] = useState<Users>({ name: "", email: "" });

  /**
   * fetch random user details on load
   */
  useEffect(() => {
    const randomUser = getRandomNumber(1, 10);
    const url = `${process.env.REACT_APP_BASE_API_URL_USERS}${randomUser}`;
    fetchData(url, setUser);
  }, []);

  /**
   * render sidebar menu
   */
  return (
    <>
      <Sider trigger={null} theme="light" style={{ height: "100vh" }}>
        <Space
          direction="vertical"
          size={16}
          align="center"
          style={{ width: "100%" }}
        >
          <img src={logo} alt="logo" width="100px" height="54px" />
          <Space direction="vertical" size={16} align="center">
            <Avatar size={100} icon={<UserOutlined />} />
          </Space>
          <Space direction="vertical" size={5} align="center">
            <span style={{ fontWeight: "bold" }}>{user?.name}</span>
            <span style={{ textTransform: "lowercase", fontSize: "small" }}>
              {user?.email}
            </span>
          </Space>
        </Space>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ marginTop: "30px" }}
          items={[
            {
              key: "/dashboard",
              icon: <DashboardOutlined />,
              label: `DASHBOARD`,
            },
            {
              key: "/posts",
              icon: <SolutionOutlined />,
              label: `BLOGS`,
            },
          ]}
          onClick={({ key }) => history.push(key)}
        />
      </Sider>
    </>
  );
};

export default Sidebar;
