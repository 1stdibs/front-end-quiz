const Actions = {
	/* Items */
	LOAD_ITEMS: Symbol(),
	LOAD_ITEM_DETAILS: Symbol(),
	TOGGLE_FAVOURITE_ITEM: Symbol(),
	LOAD_FAVOURITE_ITEMS: Symbol(),

	/* Routing */
	GO_BACK: Symbol(),
	EXECUTE_ROUTE: Symbol()
};

module.exports = Actions;