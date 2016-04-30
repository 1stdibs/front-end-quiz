import React from 'react';
import Item from './Item.react';
import ItemStore from '../../stores/ItemStore';
import ItemStoreActions from '../../actions/ItemStoreActions';

import styles from './ItemList.css';

function getItemListState() {
	return {
		items: ItemStore.getAllItems()
	};
}

const ItemList = React.createClass({

	getInitialState() {
		return {
			items: []
		};
	},

	componentDidMount() {
		ItemStore.addItemsLoadedListener(this.onItemsLoaded);
		ItemStoreActions.loadItems();
	},

	onItemsLoaded() {
		this.setState(getItemListState());
	},

	render() {
		const items = this.state.items.map((item, index) => 
			<li key={index}>
				<Item
					imageURI={item.image}
					price={item.price && item.price.amounts && item.price.amounts.USD}
					description={item.title}
					key={index}
				/>
			</li>
		);

		return (
			<ul>
				{items}
			</ul>
		);
	}

});

module.exports = ItemList;