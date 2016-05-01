import React from 'react';

import styles from './Header.css';

const Header = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	render() {
		return (
			<header className={styles.header}>
				<h1 className={styles.h1}>{this.props.title}</h1>
			</header>
		);
	}

});

module.exports = Header;