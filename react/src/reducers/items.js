/* Imports */
import { RECEIVE_ITEMS, RECEIVE_ITEMS_LOADING, RECEIVE_ITEMS_FAILURE } from './../actions/actionTypes';

/* Reducers */
/* All of the functions below, will form the initial state
As in, the initial store is an object, with properties identical to the names of methods and values equal to the default returned value
*/

// Called to handle item loading
export function items(
	state = {
		items: [],
		totalItems: 0,
		currentPage: 0,
		canRequestAdditionalItems: false
	}, action) {
		// Action matching
		switch(action.type) {
			case RECEIVE_ITEMS:
				// So, this is called whenever an item payload is received
				// Which also happens, when "More items" button is clicked.
				// So, if we had some items previously - we should append the array
				// Rather than replace it
				if (state.items.length > 0) {
					// Create a new items array
					const newItems = state.items.concat(action.payload.items);

					// Return a new state object
					return {
						items: newItems,
						totalItems: action.payload.totalItems,
						currentPage: ++state.currentPage,
						canRequestAdditionalItems: (newItems.length < action.payload.totalItems)
					}
				}
				else {
					// Replace it
					return {
						items: action.payload.items,
						totalItems: action.payload.totalItems,
						currentPage: ++state.currentPage,
						canRequestAdditionalItems: (action.payload.items.length < action.payload.totalItems)
					}
				}

			default:
				// Do nothing and return the default state object
				return state;
		}
};

// Called to handle item progress changes
export function itemsRequestInFlight(state = true, action) {
	// Action matching
	switch (action.type) {
		case RECEIVE_ITEMS_LOADING:
			return action.payload;

		default:
			return state;
	}
};

// Called to handle item retrieval failure
export function itemsRequestFailed(state = false, action) {
	// Action matching
	switch (action.type) {
		case RECEIVE_ITEMS_FAILURE:
			return action.payload;

		default:
			return state;
	}
};