import React from 'react';
import { browserHistory, HashRouter, Route, Switch } from 'react-router-dom';

import {
  MainContainer,
  MembersContainer
} from '../containers';

const Routes = () => (
  <HashRouter history={browserHistory}>
    <Switch>
      <Route exact path="/" component={MainContainer} />
      <Route path="/members" component={MembersContainer} />
    </Switch>
  </HashRouter>
);

export default Routes;
