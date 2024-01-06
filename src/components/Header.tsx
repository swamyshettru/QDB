import React from "react";
import { Layout, theme, Input } from "antd";

const { Header } = Layout;
const { Search } = Input;

const AppHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <Search
          placeholder="input search text"
          allowClear
          style={{ width: 500, marginTop: "20px", marginLeft: "20px" }}
          onChange={(e) => console.log(e.currentTarget.value)}
        />
      </Header>
    </div>
  );
};

export default AppHeader;
