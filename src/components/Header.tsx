import { Layout, theme } from "antd";

const { Header } = Layout;

const AppHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Header style={{ padding: 0, background: colorBgContainer }} />
    </div>
  );
};

export default AppHeader;
