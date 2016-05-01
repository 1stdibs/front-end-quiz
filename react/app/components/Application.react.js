import React from 'react';
import Header from './Header.react';
import ItemStore from '../stores/ItemStore';

import styles from './Application.css';

const Routes = {
	BROWSE() {
		const ItemList = require('./browse/ItemList.react');
		return {
			header: {
				title: 'Browse page'
			},
			component: <ItemList/>
		};
	},
	ITEM() {
		const Item = require('./item/Item.react');
		const currentItem = ItemStore.getCurrentItemDetails();
		const seller = currentItem.seller || {};
		return {
			header: {
				logo: seller.logo,
				title: seller.company
			},
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
				<Header	details={route.header}/>
				{Component}
			</section>
		);
	}

});

module.exports = Application;