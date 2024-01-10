import { ErrorBoundary } from "react-error-boundary";
import { Route, Switch } from "react-router-dom";
import GenericError from "../components/GenericError";
import Post from "../components/Post";
import Posts from "../components/Posts";
import Dashboard from "../components/Dashboard";
import Success from "../components/Success";

const GetRoutes = () => {
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
          <div>{<Dashboard />}</div>
        </ErrorBoundary>
      </Route>
      <Route path="/success">
        <ErrorBoundary fallback={<GenericError />}>
          <div>
            <Success />
          </div>
        </ErrorBoundary>
      </Route>
      <Route path="/error-page">
        <ErrorBoundary fallback={<GenericError />}>
          <div>{<GenericError />}</div>
        </ErrorBoundary>
      </Route>
    </Switch>
  );
};

export default GetRoutes;
