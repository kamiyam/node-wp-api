import React from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import Layout from "./layout";
import NotFoundPage from "./not-found";
import PostPage from "./post";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={PostPage} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Router>
);

export default routes;
