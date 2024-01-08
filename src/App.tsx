import React, { useState } from "react";
import "./App.css";
import { Layout, Result } from "antd";
import Sidebar from "./components/Sidebar";
import Contents from "./components/Contents";
import AppHeader from "./components/Header";

const App: React.FC = () => {
  /** render app layout(sidebar, header & content)**/
  const [error, setError] = useState(false);

  if (error) {
    return <Result status="500" subTitle="Sorry, something went wrong." />;
  } else {
    return (
      <>
        {
          <div className="main-container">
            <Layout>
              <Sidebar onError={setError} />
              <Layout>
                <AppHeader />
                <Contents />
              </Layout>
            </Layout>
          </div>
        }
      </>
    );
  }
};

export default App;
