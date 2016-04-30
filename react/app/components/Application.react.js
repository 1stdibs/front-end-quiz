import React from 'react';
import Header from './Header.react';

var Application = React.createClass({

	propTypes: {
		pageTitle: React.PropTypes.string.isRequired
	},

	render() {
		return (
			<Header title={this.props.pageTitle}/>
		);
	}

});

module.exports = Application;