const Events = {
	/* Items */
	ITEMS_LOADED: Symbol(),
	ITEM_DETAILS_LOADED: Symbol(),
	FAVOURITE_ITEM_TOGGLED: Symbol(),
	FAVOURITE_ITEMS_LOADED: Symbol(),

	/* Routing */
	GONE_BACK: Symbol(),
	ROUTE_EXECUTED: Symbol()
};

module.exports = Events;