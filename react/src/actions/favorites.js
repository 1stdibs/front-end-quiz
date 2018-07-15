/* Imports */
import { FAVORITE_ITEM, DEFAVORITE_ITEM, RECEIVE_FAVORITES } from './actionTypes';
import FavoriteService from './../services/favoriteService';

/* Action generators */
export function favoriteItem(pId) {
	return {
		type: FAVORITE_ITEM,
		payload: pId
	}
};

export function defavoriteItem(pId) {
	return {
		type: DEFAVORITE_ITEM,
		payload: pId
	}
};

export function receiveFavorites(pFavorites) {
	return {
		type: RECEIVE_FAVORITES,
		payload: pFavorites
	}
};

export function fetchFavorites(pUserId) {
	return dispatch => {
		// Request data from the back-end
		FavoriteService.GetFavorites(pUserId)
			.then((response) => {
				// Did the request fail?
				if (!response.ok) {
					// Throw an exception
					throw new Error(response.statusText);
				}

				// And return the promise, for futher processing
				return response;
			})
			.then((response) => response.json())
			.then((json) => dispatch(receiveFavorites(json)));
	};
};

export function addFavorite(pUserId, pItemId) {
	return dispatch => {
		// Send a request
		FavoriteService.AddFavorite(pUserId, pItemId)
			.then(() => dispatch(favoriteItem(pItemId)));
	}
};

export function removeFavorite(pUserId, pItemId) {
	return dispatch => {
	// Send a request
		FavoriteService.RemoveFavorite(pUserId, pItemId)
			.then(() => dispatch(defavoriteItem(pItemId)));
	}
};