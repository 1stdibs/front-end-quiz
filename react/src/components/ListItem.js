/* Imports */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoriteButton from './FavoriteButton';
import { selectItem } from './../actions/item';
import './ListItem.css';

/* Component */
class ListItem extends Component {
	// Render
	render() {
		// Figure out what the price is
		const price = this.props.item.price ?
			this.props.item.price.amounts.EUR :
			'Price Upon Request';

		// Render
		return (
			<div className = "listItem col-lg-4">
				<a onClick = {() => this.props.selectItem(this.props.item.id)}>
					<div className = "card">
						<img className = "card-img-top"
							src = {this.props.item.image}
							alt = {this.props.item.title} />

						<div className = "card-body">
							<span className = "itemCost">{price}</span>
						</div>
					</div>
				</a>

				<FavoriteButton id = { this.props.item.id }/>
			</div>

		)
	};
}

/* Private methods */
// Matches methods to props
const mapDispatchToProps = dispatch => {
	return {
		selectItem: (pId) => dispatch(selectItem(pId))
	};
};

// Export
export default connect(null, mapDispatchToProps)(ListItem);