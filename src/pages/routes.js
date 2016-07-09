import React from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import Layout from "./layout";
import NotFoundPage from "./not-found";
import PostPage from "./post";
import PostDetailPage from "./post/detail";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={PostPage} />
      <Route path="posts" component={PostPage}/>
      <Route path="posts/:id" component={PostDetailPage}/>
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Router>
);

export default routes;
