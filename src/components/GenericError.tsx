import { Result, Button } from "antd";
import { useHistory } from "react-router";
import * as constants from "../helper/constants";

const GenericError = () => {
  const history = useHistory();

  return (
    <div>
      <Result
        status={constants.ERROR_STATUS}
        subTitle={constants.SOMETHING_WENT_WRONG_TEXT}
        extra={
          <Button type="primary" onClick={() => history.push("/")}>
            {constants.BACK_HOME_TEXT}
          </Button>
        }
      />
    </div>
  );
};

export default GenericError;
