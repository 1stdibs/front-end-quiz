import React from 'react';

const Item = React.createClass({

	propTypes: {
		imageURI: React.PropTypes.string.isRequired,
		price: React.PropTypes.string.isRequired,
		description: React.PropTypes.string
	},

	render() {
		return (
			<a href="javascript:void(0)">
				<img src={this.props.imageURI} alt={this.props.description}/>
				<span>{this.props.price}</span>
			</a>
		);
	}

});

module.exports = Item;