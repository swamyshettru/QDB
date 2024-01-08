import React from "react";
import { Button, Result } from "antd";
import { useHistory } from "react-router";

const Success = () => {
  const history = useHistory();
  return (
    <div>
      <Result
        status="success"
        title="Successfully updated the post"
        // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button
            type="primary"
            key="console"
            onClick={() => history.push("/")}
          >
            Back Home
          </Button>,
          // <Button key="buy">Buy Again</Button>,
        ]}
      />
    </div>
  );
};

export default Success;
