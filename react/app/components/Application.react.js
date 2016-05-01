import React from 'react';
import Header from './Header.react';
import ItemStore from '../stores/ItemStore';

import styles from './Application.css';

const Routes = {
	BROWSE() {
		const ItemList = require('./browse/ItemList.react');
		return {
			title: 'Browse page',
			component: <ItemList/>
		};
	},
	ITEM() {
		const Item = require('./item/Item.react');
		const currentItem = ItemStore.getCurrentItemDetails();
		return {
			title: currentItem.title,
			component: <Item item={currentItem}/>
		};
	}
};

const Application = React.createClass({

	componentWillMount() {
		this.executeRoute(Routes.BROWSE);
	},

	componentDidMount() {
		ItemStore.addItemDetailsLoadedListener(this.onItemDetailsLoaded);
	},

	onItemDetailsLoaded() {
		this.executeRoute(Routes.ITEM);
	},

	executeRoute(route) {
		this.setState({
			route: route()
		});
	},

	render() {
		const route = this.state.route;
		const Component = route.component;
		return (
			<section className={styles.section}>
				<Header title={route.title}/>
				{Component}
			</section>
		);
	}

});

module.exports = Application;