import Dispatcher from '../dispatcher/Dispatcher';
import EventEmitter from 'events';
import Events from '../constants/Events';
import Actions from '../constants/Actions';
import ServiceUtils from '../utils/ServiceUtils';

var _items = [];
var _isMoreItemsAvailable = false;
var _itemDetails = {};
var _currentItemDetails = {};

const _actionMap = {
	[Actions.LOAD_ITEMS]: function(params) {
		ServiceUtils.callService('loadItems', params).then((response) => {
			_items = _items.concat(response.items);
			_isMoreItemsAvailable = _items.length < response.totalItems;
			ItemStore.emitItemsLoadedEvent();
		});
	},
	[Actions.LOAD_ITEM_DETAILS]: function(params) {
		const promises = [];

		if (!_itemDetails[params.id]) {
			promises.push(
				ServiceUtils.callService('loadItemDetails', params)
				.then((response) => {
					_itemDetails[response.id] = response;
				})
			);
		}

		Promise.all(promises).then(() => {
			_currentItemDetails = _itemDetails[params.id];
			ItemStore.emitItemDetailsLoadedEvent();
		});
	}
};

const ItemStore = window.Object.assign({}, EventEmitter.prototype, {
	getAllItems() {
		return _items;
	},

	getCurrentItemDetails() {
		return _currentItemDetails;
	},

	isMoreItemsAvailable() {
		return _isMoreItemsAvailable;
	},

	emitItemsLoadedEvent() {
		this.emit(Events.ITEMS_LOADED);
	},

	addItemsLoadedListener: function(callback) {
		this.on(Events.ITEMS_LOADED, callback);
	},

	emitItemDetailsLoadedEvent() {
		this.emit(Events.ITEM_DETAILS_LOADED);
	},

	addItemDetailsLoadedListener: function(callback) {
		this.on(Events.ITEM_DETAILS_LOADED, callback);
	}
});

// Register callback to handle all updates
Dispatcher.register(function(action) {
	_actionMap[action.type](action.params);
});

module.exports = ItemStore;