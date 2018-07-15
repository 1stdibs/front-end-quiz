/* Imports */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

/* Store */
export default function configureStore(initialState) {
	// Create a default store
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}