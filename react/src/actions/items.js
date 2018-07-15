/* Imports */
import { RECEIVE_ITEMS, RECEIVE_ITEMS_LOADING, RECEIVE_ITEMS_FAILURE } from './actionTypes';
import ItemService from './../services/itemService';

/* Action generators */
// Called when items are retrieved succesfully
export function receiveItemsSuccess(pItems) {
	return {
		type: RECEIVE_ITEMS,
		payload: pItems
	}
};

// Called when item retrieval is in progress
export function receiveItemsProgress(pBool) {
	return {
		type: RECEIVE_ITEMS_LOADING,
		payload: pBool
	}
};

// Called when item retrieval fails
export function receiveItemsFailure(pBool) {
	return {
		type: RECEIVE_ITEMS_FAILURE,
		payload: pBool
	}
};

// Fetches items
const itemsPerPage = 9;
export function fetchItems(pCurrentPage = 0) {
	return dispatch => {
		// Indicate that the request is in progress
		dispatch(receiveItemsProgress(true));

		// Request data from the back-end
		ItemService.GetItems(pCurrentPage * itemsPerPage, itemsPerPage)
			.then((response) => {
				// Did the request fail?
				if (!response.ok) {
					// Throw an exception
					throw new Error(response.statusText);
				}

				// Otherwise, indicate that we have the data
				dispatch(receiveItemsProgress(false));

				// And return the promise, for futher processing
				return response;
			})
			.then((response) => response.json())
			.then((json) => dispatch(receiveItemsSuccess(json)))
			.catch(() => dispatch(receiveItemsFailure(true)));
	};
};