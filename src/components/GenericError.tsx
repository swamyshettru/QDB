import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router";

const GenericError = () => {
  const history = useHistory();
  return (
    <div>
      <Result
        status="500"
        subTitle="Sorry, something went wrong."
        extra={
          <Button type="primary" onClick={() => history.push("/")}>
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default GenericError;
