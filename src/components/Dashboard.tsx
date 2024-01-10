import { Button, Empty } from "antd";
import { useHistory } from "react-router";
import * as constants from "../helper/constants";

const Dashboard = () => {
  const history = useHistory();
  return (
    <Empty
      image={constants.DASHBOARD_IMG}
      description={
        <span>{constants.DASHBOARD_PLEASE_SELECT_OPTIONS_TEXT} &#128522;</span>
      }
      style={{ height: "100vh" }}
    >
      <Button type="primary" onClick={() => history.push("/posts")}>
        {constants.BLOGS_LABEL}
      </Button>
    </Empty>
  );
};

export default Dashboard;
