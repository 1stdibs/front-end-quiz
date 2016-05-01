const Events = {
	/* Items */
	ITEMS_LOADED: Symbol(),
	ITEM_DETAILS_LOADED: Symbol(),

	/* Routing */
	GONE_BACK: Symbol(),
	ROUTE_EXECUTED: Symbol()
};

module.exports = Events;