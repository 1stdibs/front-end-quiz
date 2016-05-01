import React from 'react';

import styles from './Header.css';

const Header = React.createClass({

	propTypes: {
		details: React.PropTypes.object.isRequired
	},

	render() {
		const headerDetails = this.props.details;
		var headerElement;
		if (headerDetails.logo) {
			headerElement = (<img className={styles.logo} src={headerDetails.logo} alt={headerDetails.title}/>);
		} else {
			headerElement = (<h1 className={styles.h1}>{headerDetails.title}</h1>);
		}

		return (
			<header className={styles.header}>
				{headerElement}
			</header>
		);
	}

});

module.exports = Header;