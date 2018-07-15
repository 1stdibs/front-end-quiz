/* Imports */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './components/App';

/* Configure store */
const store = configureStore();

/* Render */
render(
	<Provider store = {store}>
		<App />
	</Provider>,
	document.getElementById('root')
);