// @flow
import React from 'react';
import ScrollMemory from 'react-router-scroll-memory';
import { Switch, Route } from 'react-router-dom';

import List from './List';

export const Main = () => (
  <div>
    <ScrollMemory />
    <Switch>
      <Route exact path="/" component={List} />
    </Switch>
  </div>
);

export default Main;
