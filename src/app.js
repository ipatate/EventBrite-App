import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import dataStore from './Store/DataStore';
import Main from './Main';

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
