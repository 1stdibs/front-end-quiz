import React from 'react';
import ItemStore from '../../stores/ItemStore';

const Item = React.createClass({

	propTypes: {
		item: React.PropTypes.object.isRequired
	},

	render() {
		return (
			<div>{this.props.item.id}</div>
		);
	}

});

module.exports = Item;