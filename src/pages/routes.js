import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import NotFoundPage from './not-found';
import HomePage from './home';

const routes = (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={HomePage} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Router>
);

export default routes;
