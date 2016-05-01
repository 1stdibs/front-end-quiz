import Dispatcher from '../dispatcher/Dispatcher';
import EventEmitter from 'events';
import Events from '../constants/Events';
import Actions from '../constants/Actions';
import ServiceUtils from '../utils/ServiceUtils';

var _items = [];

const _actionMap = {
	[Actions.LOAD_ITEMS]: function() {
		ServiceUtils.callService('loadItems').then((response) => {
			_items = response.items;
			ItemStore.emitItemsLoadedEvent();
		});
	}
};

const ItemStore = window.Object.assign({}, EventEmitter.prototype, {
	getAllItems() {
		return _items;
	},

	emitItemsLoadedEvent() {
		this.emit(Events.ITEMS_LOADED);
	},

	addItemsLoadedListener: function(callback) {
		this.on(Events.ITEMS_LOADED, callback);
	}
});

// Register callback to handle all updates
Dispatcher.register(function(action) {
	_actionMap[action.type]();
});

module.exports = ItemStore;