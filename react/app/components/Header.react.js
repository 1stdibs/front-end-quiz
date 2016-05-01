import React from 'react';
import RoutingActions from '../actions/RoutingActions';
import RoutingStore from '../stores/RoutingStore';

import styles from './Header.css';

const Header = React.createClass({

	propTypes: {
		details: React.PropTypes.object.isRequired
	},

	goBack() {
		RoutingActions.goBack();
	},

	render() {
		const headerDetails = this.props.details;
		var headerElement;
		if (headerDetails.logo) {
			headerElement = (<img className={styles.logo} src={headerDetails.logo} alt={headerDetails.title}/>);
		} else {
			headerElement = (<h1 className={styles.h1}>{headerDetails.title}</h1>);
		}

		var backButton;
		if (RoutingStore.hasHistory()) {
			backButton = (
				<nav className={styles.nav}>
					<a href='javascript:void(0)' onClick={this.goBack} className={styles.backButton}>
						Home
					</a>
				</nav>
			);
		}

		return (
			<header className={styles.header}>
				{backButton}
				{headerElement}
			</header>
		);
	}

});

module.exports = Header;