import React from 'react';
import Header from './Header.react';

import styles from './Application.css';

const Routes = {
	BROWSE: {
		title: 'Browse page',
		component: require('./browse/ItemList.react')
	},
	ITEM: {
		title: 'Item',
		component: require('./item/Item.react')
	}
};

const Application = React.createClass({

	getDefaultProps() {
		return {
			route: Routes.BROWSE
		};
	},

	render() {
		const route = this.props.route;
		const Component = route.component;
		return (
			<section className={styles.section}>
				<Header title={route.title}/>
				<Component/>
			</section>
		);
	}

});

module.exports = Application;