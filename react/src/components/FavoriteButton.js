/* Imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from './../actions/favorites';
import './FavoriteButton.css';

/* Component */
class FavoriteButton extends Component {
	// Render
	render() {
		// Return a placeholder, while we get initial values
		if (!this.props.favorites) {
			return (
				<div></div>
			)
		}

		// Is this item favorited?
		const isFavorite = this.props.favorites.includes(this.props.id);

		// Render
		return (
			<div className = "favoriteButton">
				<a onClick = {isFavorite ? 
					() => {this.props.remove(this.props.userId, this.props.id)} : 
					() => {this.props.add(this.props.userId, this.props.id)}}>
						<span className = {isFavorite ? 'fa fa-heart' : 'fa fa-heart-o'}></span>
				</a>
			</div>
		)
	};
}

/* Private methods */
// This maps the state to the props passed to this component
const mapStateToProps = (state) => {
	return {
		userId: state.userId,
		favorites: state.favorites
	};
};

// Ok, so this matches the method in actions to a method available here
const mapDispatchToProps = dispatch => {
	return {
		add: (pUserId, pItemId) => dispatch(addFavorite(pUserId, pItemId)),
		remove: (pUserId, pItemId) => dispatch(removeFavorite(pUserId, pItemId))
	};
};


// So, this, in matches the state, dispatch to props passed to itemlist
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);