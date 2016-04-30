import React from 'react';

const Header = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	render() {
		return (
			<header id="main-header-container">
				<h1 id="main-header">{this.props.title}</h1>
			</header>
		);
	}

});

module.exports = Header;