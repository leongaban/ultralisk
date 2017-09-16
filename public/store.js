import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

/* eslint-disable no-underscore-dangle */
const reduxDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-enable */

const store = createStore(
  reducer,
  reduxDevToolsExtension && reduxDevToolsExtension(),
  applyMiddleware(thunk)
);

export default store;
