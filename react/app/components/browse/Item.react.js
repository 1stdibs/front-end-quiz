import React from 'react';

import styles from './Item.css';

const Item = React.createClass({

	propTypes: {
		imageURI: React.PropTypes.string.isRequired,
		price: React.PropTypes.string.isRequired,
		description: React.PropTypes.string
	},

	render() {
		return (
			<a href="javascript:void(0)" className={styles.a}>
				<img src={this.props.imageURI} alt={this.props.description} className={styles.img}/>
				<span className={styles.span}>{this.props.price}</span>
			</a>
		);
	}

});

module.exports = Item;