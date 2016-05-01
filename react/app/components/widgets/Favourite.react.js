import React from 'react';
import FavouriteItemStore from '../../stores/FavouriteItemStore';
import FavouriteItemActions from '../../actions/FavouriteItemActions';

import styles from './Favourite.css';

function getState(id) {
	return {
		isFavourite: FavouriteItemStore.isItemFavourite(id)
	};
}

const Item = React.createClass({

	propTypes: {
		id: React.PropTypes.string.isRequired
	},

	getInitialState() {
		return getState(this.props.id);
	},

	componentDidMount() {
		FavouriteItemStore.addFavouriteItemsLoadedListener(this.favouriteItemsLoaded);
		FavouriteItemStore.addFavouriteItemToggledListener(this.favouriteItemToggled);
	},

	componentWillUnmount() {
		FavouriteItemStore.removeFavouriteItemsLoadedListener(this.favouriteItemsLoaded);
		FavouriteItemStore.removeFavouriteItemToggledListener(this.favouriteItemToggled);
	},

	favouriteItemsLoaded() {
		this.setState(getState(this.props.id));
	},

	favouriteItemToggled() {
		this.setState(getState(this.props.id));
	},

	favouriteItem(event) {
		event.stopPropagation();
		FavouriteItemActions.toggleFavouriteItem({
			id: this.props.id
		});
	},

	render() {
		const classNames = [styles.favouriteButton, styles[this.state.isFavourite ? 'isFavourite' : 'canFavourite'], this.props.className];
		return (
			<button
				type='button'
				className={classNames.join(' ')}
				onClick={this.favouriteItem}
			></button>
		);
	}

});

module.exports = Item;