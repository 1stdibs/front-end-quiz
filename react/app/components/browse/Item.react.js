import React from 'react';
import ItemStore from '../../stores/ItemStore';
import ItemStoreActions from '../../actions/ItemStoreActions';

import styles from './Item.css';

const Item = React.createClass({

	propTypes: {
		id: React.PropTypes.string.isRequired,
		imageURI: React.PropTypes.string,
		price: React.PropTypes.string,
		title: React.PropTypes.string
	},

	itemClickHandler() {
		ItemStoreActions.loadItemDetails({
			id: this.props.id
		});
	},

	render() {
		return (
			<a href="javascript:void(0)" className={styles.a} onClick={this.itemClickHandler}>
				<img src={this.props.imageURI} alt={this.props.title} className={styles.img}/>
				<span className={styles.span}>{this.props.price || 'N/A'}</span>
			</a>
		);
	}

});

module.exports = Item;