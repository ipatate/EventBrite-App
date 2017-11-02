import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import dataStore from './Store/DataStore';
import Main from './Components/Main';

import './Styles/bootstrap';
// style css for webpack builder
import './Styles/main.scss';

const store = {
  dataStore
};

ReactDOM.render(
  <Provider {...store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
