import { ErrorBoundary } from "react-error-boundary";
import { Route, Switch } from "react-router-dom";
import GenericError from "../components/GenericError";
import Posts from "../components/Posts";

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
      <Route path="/posts">
        <ErrorBoundary fallback={<GenericError />}>
          <Posts />
        </ErrorBoundary>
      </Route>
      <Route path="/dashboard">
        <ErrorBoundary fallback={<GenericError />}>
          <div>Please slect option from the side menu</div>
        </ErrorBoundary>
      </Route>
    </Switch>
  );
};

export default getRoutes;
