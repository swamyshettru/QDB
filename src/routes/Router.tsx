import { ErrorBoundary } from "react-error-boundary";
import { Route, Switch } from "react-router-dom";
import GenericError from "../components/GenericError";
import Post from "../components/Post";
import Posts from "../components/Posts";
import { DASHBOARD_CONTENT } from "../helper/constants";

const getRoutes = () => {
  /**
   * Switch to specific routes
   * display fallback component on error
   */
  return (
    <Switch>
      <Route exact path="/">
        <ErrorBoundary fallback={<GenericError />}>
          <Posts />
        </ErrorBoundary>
      </Route>
      <Route exact path="/posts">
        <ErrorBoundary fallback={<GenericError />}>
          <Posts />
        </ErrorBoundary>
      </Route>
      <Route path={"/posts/:id"}>
        <ErrorBoundary fallback={<GenericError />}>
          <Post />
        </ErrorBoundary>
      </Route>
      <Route path="/dashboard">
        <ErrorBoundary fallback={<GenericError />}>
          <div>{DASHBOARD_CONTENT}</div>
        </ErrorBoundary>
      </Route>
    </Switch>
  );
};

export default getRoutes;