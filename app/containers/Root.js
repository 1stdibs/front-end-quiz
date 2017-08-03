import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import createHistory from 'history/createBrowserHistory';
import Routes from './Routes';
import appReducer from '../reducers/index';

const history = createHistory();
const store = createStore(
    combineReducers({ app: appReducer, router: routerReducer }),
    applyMiddleware(thunk, routerMiddleware(history), logger)
);
const Root = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider>
);

export default Root;