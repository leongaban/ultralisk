import React from 'react';
import { browserHistory, HashRouter, Route, Switch } from 'react-router-dom';

import {
  MainContainer,
  MembersContainer,
  RewardsContainer
} from '../containers';

const Routes = () => (
  <HashRouter history={browserHistory}>
    <Switch>
      <Route exact path="/" component={MainContainer} />
      <Route path="/members" component={MembersContainer} />
      <Route path="/members" component={RewardsContainer} />
    </Switch>
  </HashRouter>
);

export default Routes;
