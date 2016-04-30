import React from 'react';
import Header from './Header.react';

const Routes = {
	BROWSE: {
		title: 'Browse page',
		component: require('./browse/ItemList.react')
	},
	ITEM: {
		title: 'Item',
		component: require('./item/Item.react')
	}
};

const Application = React.createClass({

	getDefaultProps() {
		return {
			route: Routes.BROWSE
		};
	},

	render() {
		const route = this.props.route;
		const Component = route.component;
		return (
			<div>
				<Header title={route.title}/>
				<Component/>
			</div>
		);
	}

});

module.exports = Application;