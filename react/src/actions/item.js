/* Imports */
import { SELECT_ITEM, DESELECT_ITEM, RECEIVE_ITEM, RECEIVE_ITEM_LOADING, RECEIVE_ITEM_FAILURE } from './actionTypes';
import ItemService from './../services/itemService';

/* Action generators */
// Select item
// Called when an item is selected
export function selectItem(pId) {
	return {
		type: SELECT_ITEM,
		payload: pId
	}
};

// Deselect item
// Called when an item is deselected
export function deselectItem() {
	return {
		type: DESELECT_ITEM
	}
};

// Receive item
// Called when an item is received
export function receiveItemSuccess(pItem) {
	return {
		type: RECEIVE_ITEM,
		payload: pItem
	}
};

// Called when item retrieval is in progress
export function receiveItemProgress(pBool) {
	return {
		type: RECEIVE_ITEM_LOADING,
		payload: pBool
	}
};

// Called when item retrieval fails
export function receiveItemFailure(pBool) {
	return {
		type: RECEIVE_ITEM_FAILURE,
		payload: pBool
	}
};

// Fetches item
export function fetchItem(pId) {
	return dispatch => {
		// Indicate that the request is in progress
		dispatch(receiveItemProgress(true));

		// Request data from the back-end
		ItemService.GetItemById(pId)
			.then((response) => {
				// Did the request fail?
				if (!response.ok) {
					// Throw an exception
					throw new Error(response.statusText);
				}

				// Otherwise, indicate that we have the data
				dispatch(receiveItemProgress(false));

				// And return the promise, for futher processing
				return response;
			})
			.then((response) => response.json())
			.then((json) => dispatch(receiveItemSuccess(json)))
			.catch(() => dispatch(receiveItemFailure(true)));
	};
};