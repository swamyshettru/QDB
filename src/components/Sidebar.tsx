import React from "react";
import "../App.css";
import {
  UserOutlined,
  DashboardOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Space, Avatar, Spin } from "antd";
import logo from "../images/logo.png";
import { useHistory } from "react-router-dom";
import { getRandomNumber } from "../helper/Utils";
import {
  BLOGS_LABEL,
  DASHBOARD_LABEL,
  PROFILE_SOURCE,
} from "../helper/constants";
import { useFetch } from "../hooks/useFetch";

const { Sider } = Layout;

type sideBarProps = {
  onError: (error: any) => void;
};

const Sidebar = (props: sideBarProps) => {
  let history = useHistory();

  const randomUser = getRandomNumber(1, 10);
  const url = `${process.env.REACT_APP_BASE_API_URL_USERS}${randomUser}`;

  const [data, error, loading] = useFetch(url);

  if (error) {
    props?.onError(true);
  }

  return loading ? (
    <Spin className="spinner" data-testid="spinner" fullscreen />
  ) : (
    <>
      <Sider theme="light">
        <Space
          direction="vertical"
          size={16}
          align="center"
          style={{ width: "100%" }}
        >
          <img
            src={logo}
            alt="logo"
            width="100px"
            height="54px"
            style={{ margin: "20px 0 0 17px" }}
            onClick={() => history.push("/")}
          />
          {error && <Avatar size={100} icon={<UserOutlined />} />}
          {!error && (
            <Space direction="vertical" size={16} align="center">
              <Avatar
                size={100}
                icon={<UserOutlined />}
                src={PROFILE_SOURCE || <UserOutlined />}
              />
            </Space>
          )}
          <Space direction="vertical" size={5} align="center">
            <span style={{ fontWeight: "bold" }}>{data?.name}</span>
            <span style={{ textTransform: "lowercase", fontSize: "small" }}>
              {data?.email}
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
              label: DASHBOARD_LABEL,
            },
            {
              key: "/posts",
              icon: <SolutionOutlined />,
              label: BLOGS_LABEL,
            },
          ]}
          onClick={({ key }) => history.push(key)}
        />
      </Sider>
    </>
  );
};

export default Sidebar;
