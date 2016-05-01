import Dispatcher from '../dispatcher/Dispatcher';
import EventEmitter from 'events';
import Events from '../constants/Events';
import Actions from '../constants/Actions';
import ServiceUtils from '../utils/ServiceUtils';

const _favouriteItems = new window.Set();

const _actionMap = {
	[Actions.TOGGLE_FAVOURITE_ITEM]: function(params) {
		ServiceUtils.callService('toggleFavouriteItem', params).then((response) => {
			console.log(_favouriteItems);
			console.log(response.id);
			console.log(response.isFavourite ? 'add' : 'delete');
			_favouriteItems[response.isFavourite ? 'add' : 'delete'](response.id);
			console.log(_favouriteItems);
			FavouriteItemStore.emitFavouriteItemToggledEvent();
		});
	}
};

const FavouriteItemStore = window.Object.assign({}, EventEmitter.prototype, {
	isItemFavourite(id) {
		return _favouriteItems.has(id);
	},

	emitFavouriteItemToggledEvent() {
		this.emit(Events.FAVOURITE_ITEM_TOGGLED);
	},

	addFavouriteItemToggledListener(callback) {
		this.on(Events.FAVOURITE_ITEM_TOGGLED, callback);
	},

	removeFavouriteItemToggledListener(callback) {
		this.removeListener(Events.FAVOURITE_ITEM_TOGGLED, callback);
	}
});

Dispatcher.register(function(action) {
	const handler = _actionMap[action.type];
	if (handler) {
		handler(action.params);
	}
});

module.exports = FavouriteItemStore;