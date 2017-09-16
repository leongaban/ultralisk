import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
/* eslint-disable no-unused-vars */
import css from './styles/ultralisk.scss';
// import Routes from './config/routes';
/* eslint-enable */

import App from './containers/App';

import store from './store';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
