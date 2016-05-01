import Dispatcher from '../dispatcher/Dispatcher';
import EventEmitter from 'events';
import React from 'react';
import Events from '../constants/Events';
import Actions from '../constants/Actions';
import Routes from '../constants/Routes';
import ItemStore from './ItemStore';

const _history = [];
var _currentRoute = null;

const _routes = {
	[Routes.BROWSE]: function() {
		const ItemList = require('../components/browse/ItemList.react');
		return {
			header: {
				title: 'Browse page'
			},
			component: <ItemList/>
		};
	},
	[Routes.ITEM]: function() {
		const Item = require('../components/item/Item.react');
		const currentItem = ItemStore.getCurrentItemDetails();
		const seller = currentItem.seller || {};
		return {
			header: {
				logo: seller.logo,
				title: 'Item details',
				showBackButton: true
			},
			component: <Item item={currentItem}/>
		};
	}
};

const _actionMap = {
	[Actions.GO_BACK]: function(params) {
		_currentRoute = _history.pop();
		RoutingStore.emitRouteExecutedEvent();
	},
	[Actions.EXECUTE_ROUTE]: function(routeName) {
		if (_currentRoute) {
			_history.push(_currentRoute);
		}
		_currentRoute = _routes[routeName]();
		RoutingStore.emitRouteExecutedEvent();
	}
};

const RoutingStore = window.Object.assign({}, EventEmitter.prototype, {
	getCurrentRoute() {
		return _currentRoute;
	},

	hasHistory() {
		return _history.length > 0;
	},

	emitRouteExecutedEvent() {
		this.emit(Events.ROUTE_EXECUTED);
	},

	addRouteExecutedListener: function(callback) {
		this.on(Events.ROUTE_EXECUTED, callback);
	},

	removeRouteExecutedListener: function(callback) {
		this.removeListener(Events.ROUTE_EXECUTED, callback);
	}
});

Dispatcher.register(function(action) {
	const handler = _actionMap[action.type];
	if (handler) {
		handler(action.params);
	}
});

module.exports = RoutingStore;