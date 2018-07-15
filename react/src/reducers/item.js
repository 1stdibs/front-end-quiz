/* Imports */
import { SELECT_ITEM, DESELECT_ITEM, RECEIVE_ITEM, RECEIVE_ITEM_LOADING, RECEIVE_ITEM_FAILURE } from './../actions/actionTypes';

/* Reducers */

// Called to handle item loading
export function selectedItem(
	state = {
		id: null,
		item: null
	}, action) {
		// Action matching
		switch(action.type) {
			case SELECT_ITEM:
				// This triggers, once an item has been selected from the list
				return {
					id: action.payload,
					item: null
				}

			case DESELECT_ITEM:
				// This triggers when the back button has been pressed
				return {
					id: null,
					item: null
				}

			case RECEIVE_ITEM:
				// This triggers once the web-service returns the data
				return {
					id: action.payload.id,
					item: action.payload
				}

			default:
				// Do nothing and return the default state object
				return state;
		}
};

// Called to handle item progress changes
export function itemRequestInFlight(state = true, action) {
	// Action matching
	switch (action.type) {
		case RECEIVE_ITEM_LOADING:
			return action.payload;

		default:
			return state;
	}
};

// Called to handle item retrieval failure
export function itemRequestFailed(state = false, action) {
	// Action matching
	switch (action.type) {
		case RECEIVE_ITEM_FAILURE:
			return action.payload;

		default:
			return state;
	}
};