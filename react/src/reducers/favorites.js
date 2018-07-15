/* Imports */
import { FAVORITE_ITEM, DEFAVORITE_ITEM, RECEIVE_FAVORITES } from './../actions/actionTypes';
import UserService from './../services/userService';

/* Reducers */
// Called to handle item loading
export function favorites(state = null, action) {
	// Action matching
	switch(action.type) {
		case RECEIVE_FAVORITES:
			// Return the payload
			return action.payload;

		case FAVORITE_ITEM:
			// Add the item into the array
			return [...state, action.payload];

		case DEFAVORITE_ITEM:
			// Remove the item from the array
			return [
        		...state.slice(0, state.indexOf(action.payload)),
        		...state.slice(state.indexOf(action.payload) + 1)
    		];

		default:
			// Do nothing and return the default state object
			return state;
	}
};

export function userId(state = UserService.GetUserId(), action) {
	// This does nothing, just creates an initial state
	return state;
};