import React, { useState } from "react";
import "./App.css";
import { Layout } from "antd";
import Sidebar from "./components/Sidebar";
import Contents from "./components/Contents";
import AppHeader from "./components/Header";
import GenericError from "./components/GenericError";

const App: React.FC = () => {
  const [error, setError] = useState(false);

  if (error) {
    //display error page on fetch users fails
    return <GenericError />;
  } else {
    //render app layout
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
