import React from 'react';
import Header from './Header.react';
import ItemStore from '../stores/ItemStore';
import Routes from '../constants/Routes';
import RoutingStore from '../stores/RoutingStore';
import RoutingActions from '../actions/RoutingActions';

import styles from './Application.css';

const Application = React.createClass({

	componentWillMount() {
		RoutingStore.addRouteExecutedListener(this.onRouteExecuted);
		RoutingActions.executeRoute(Routes.BROWSE);
	},

	componentDidMount() {
		ItemStore.addItemDetailsLoadedListener(this.onItemDetailsLoaded);
	},

	componentWillUnmount() {
		ItemStore.removeItemDetailsLoadedListener(this.onItemDetailsLoaded);
		RoutingStore.removeRouteExecutedListener(this.onRouteExecuted);
	},

	onItemDetailsLoaded() {
		RoutingActions.executeRoute(Routes.ITEM);
	},

	onRouteExecuted(route) {
		this.setState({
			route: RoutingStore.getCurrentRoute()
		});
	},

	render() {
		const route = this.state && this.state.route;

		if (!route) {
			return false;
		}

		const Component = route.component;
		return (
			<section className={styles.section}>
				<Header	details={route.header}/>
				{Component}
			</section>
		);
	}

});

module.exports = Application;