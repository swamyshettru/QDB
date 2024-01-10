import { Button, Result } from "antd";
import { useHistory } from "react-router";
import * as constants from "../helper/constants";

const Success = () => {
  const history = useHistory();
  return (
    <div>
      <Result
        status={constants.SUCCESS_STATUS}
        title={constants.SUCCESSFULLY_UPDATE_TEXT}
        extra={[
          <Button
            type="primary"
            key="console"
            onClick={() => history.push("/")}
          >
            {constants.BACK_HOME_TEXT}
          </Button>,
        ]}
      />
    </div>
  );
};

export default Success;
