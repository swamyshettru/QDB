import React from "react";
import "./App.css";
import { Layout, theme, Input } from "antd";
import Sidebar from "./components/sidebar/Sidebar";
import Contents from "./components/Contents";

const { Header } = Layout;
const { Search } = Input;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  /**
   * render app layout(sidebar, header & content)
   *
   */
  return (
    <>
      {
        <Layout style={{ height: "100vh" }}>
          <Sidebar />
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
              <Search
                placeholder="input search text"
                allowClear
                style={{ width: 500, marginTop: "20px", marginLeft: "20px" }}
              />
            </Header>
            <Contents />
          </Layout>
        </Layout>
      }
    </>
  );
};

export default App;
