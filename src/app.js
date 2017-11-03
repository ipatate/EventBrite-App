// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import dataStore from './Store/DataStore';
import Main from './Components/Main';

import './Styles/bootstrap';
// style css for webpack builder
import './Styles/init.scss';

const store = {
  dataStore
};

ReactDOM.render(
  <BrowserRouter>
    <Provider {...store}>
      <Main />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
