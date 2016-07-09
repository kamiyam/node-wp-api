"use strict";

var React = require("react");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

var PostPage = require("../pages/post");
var NotFoundPage = require("../pages/not-found");

module.exports = (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={PostPage} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Router>
);
