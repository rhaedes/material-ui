import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router, useRouterHistory} from 'react-router';
import AppRoutes from './AppRoutes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createHashHistory} from 'history';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers/reducers';

// Helpers for debugging
window.React = React;
window.Perf = require('react-addons-perf');

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

/**
 * Render the main app component. You can read more about the react-router here:
 * https://github.com/rackt/react-router/blob/master/docs/guides/overview.md
 */

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers) }>
    <Router
      history={useRouterHistory(createHashHistory)({ queryKey: false }) }
      onUpdate={() => window.scrollTo(0, 0) }
      >
      {AppRoutes}
    </Router>
  </Provider>
  , document.getElementById('app'));
