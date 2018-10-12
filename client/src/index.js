import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from './store';
import Database from './components/Database';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk, loggerMiddleware)),
);

const App = () => (
  <Provider store={store} >
    <Database />
  </Provider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
