import Dispatcher from '../dispatcher/Dispatcher';
import EventEmitter from 'events';
import Events from '../constants/events';
import Actions from '../constants/Actions';

var _items = [];

const _actionMap = {
	[Actions.LOAD_ITEMS]: function() {
		console.log('I should load data here!');
		_items = [{
			"title": "Stunning Arturo Pani, Solid Brass Sculptural Coffee Table, Mexico City, 1950",
			"image": "https:\/\/a.1stdibscdn.com\/archivesE\/upload\/1121189\/f_3906702\/3906702_s.jpg",
			"price": {
				"amounts": {
					"GBP": "\u00a38,185",
					"USD": "$12,000",
					"EUR": "\u20ac10.755"
				},
				"initial_amounts": null
			}
		}, {
			"title": "Studio-Built Circular Mirror by Ghiro\u0301 Studio",
			"image": "https:\/\/a.1stdibscdn.com\/archivesE\/upload\/311218\/f_3864112\/IMG_0666_org_s.jpg",
			"price": {
				"amounts": {
					"GBP": "\u00a317,735",
					"USD": "$26,000",
					"EUR": "\u20ac23.304"
				},
				"initial_amounts": null
			}
		}, {
			"title": "Jules Leleu Rare Pair of Rosewood Armchairs, circa 1929",
			"image": "https:\/\/a.1stdibscdn.com\/archivesE\/upload\/1121189\/f_3907612\/3907612_s.jpg",
			"price": {
				"amounts": {
					"GBP": "\u00a317,053",
					"USD": "$25,000",
					"EUR": "\u20ac22.407"
				},
				"initial_amounts": null
			}
		}, {
			"title": "Curved Sofa by Osvaldo Borsani for Arredamenti Borsani",
			"image": "https:\/\/a.1stdibscdn.com\/archivesE\/upload\/f_9311\/f_3915252\/DSC0741B_s.jpg",
			"price": {
				"amounts": {
					"GBP": "\u00a322,070",
					"EUR": "\u20ac29.000",
					"USD": "$32,354"
				},
				"initial_amounts": null
			}
		}];
		ItemStore.emitItemsLoadedEvent();
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