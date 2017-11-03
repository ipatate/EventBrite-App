// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import dataStore from './Store/DataStore';
import Main from './Components/Main';

import './Styles/bootstrap';
// style css for webpack builder
import './Styles/init.scss';

const store = {
  dataStore
};

ReactDOM.render(
  <Provider {...store}>
    <Main dataStore={store.dataStore} />
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
