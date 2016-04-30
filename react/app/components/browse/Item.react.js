import React from 'react';

import './Item.css';

const Item = React.createClass({

	propTypes: {
		imageURI: React.PropTypes.string.isRequired,
		price: React.PropTypes.string.isRequired,
		description: React.PropTypes.string
	},

	render() {
		return (
			<a href="javascript:void(0)">
				<img src={this.props.imageURI} alt={this.props.description} height="240"/>
				<span>{this.props.price}</span>
			</a>
		);
	}

});

module.exports = Item;