import Dispatcher from '../dispatcher/Dispatcher';
import EventEmitter from 'events';
import Events from '../constants/Events';
import Actions from '../constants/Actions';
import ServiceUtils from '../utils/ServiceUtils';

const _favouriteItems = new window.Set();

const _actionMap = {
	[Actions.LOAD_FAVOURITE_ITEMS]: function(params) {
		const promises = [];
		if (_favouriteItems.size === 0) {
			promises.push(ServiceUtils.callService('loadFavouriteItems', params).then((response) => {
				for (let id in response) {
					if (response.hasOwnProperty(id)) {
						_favouriteItems.add(id);
					}
				}
			}));
		}
		window.Promise.all(promises).then(() => {
			FavouriteItemStore.emitFavouriteItemsLoadedEvent();
		});
	},
	[Actions.TOGGLE_FAVOURITE_ITEM]: function(params) {
		ServiceUtils.callService('toggleFavouriteItem', params).then((response) => {
			_favouriteItems[response.isFavourite ? 'add' : 'delete'](response.id);
			FavouriteItemStore.emitFavouriteItemToggledEvent();
		});
	}
};

const FavouriteItemStore = window.Object.assign({}, EventEmitter.prototype, {
	isItemFavourite(id) {
		return _favouriteItems.has(id);
	},

	emitFavouriteItemsLoadedEvent() {
		this.emit(Events.FAVOURITE_ITEMS_LOADED);
	},

	addFavouriteItemsLoadedListener(callback) {
		this.on(Events.FAVOURITE_ITEMS_LOADED, callback);
	},

	removeFavouriteItemsLoadedListener(callback) {
		this.removeListener(Events.FAVOURITE_ITEMS_LOADED, callback);
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

// We are goint to have a lof of these. Every single items listens for this event.
FavouriteItemStore.setMaxListeners(0);

Dispatcher.register(function(action) {
	const handler = _actionMap[action.type];
	if (handler) {
		handler(action.params);
	}
});

module.exports = FavouriteItemStore;