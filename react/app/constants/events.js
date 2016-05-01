const Events = {
	/* Items */
	ITEMS_LOADED: Symbol(),
	ITEM_DETAILS_LOADED: Symbol(),
	FAVOURITE_ITEM_TOGGLED: Symbol(),

	/* Routing */
	GONE_BACK: Symbol(),
	ROUTE_EXECUTED: Symbol()
};

module.exports = Events;