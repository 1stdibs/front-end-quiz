import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'

import appReducer from 'app/reducers/appReducer';

const loggerMiddleware = createLogger();

const configureStore = initialState => {
    return createStore(
        appReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
};

export default configureStore;
