// Imports
import EndpointConfig from './../config/endpointConfig';

// This class provides access to favorite item related web-service calls
class FavoriteService {
	// Get favorites
	// Returns a promise for the list of favorite offers
	static GetFavorites(pUserId) {
		// Construct a new URL
		let url = new URL(`${EndpointConfig.url}/favorites`);

		// Add URL params to it
		url.search = new URLSearchParams({
			userId: pUserId
		});

		// Set-up request params
		const requestParams = {
			method: 'GET',
			headers: EndpointConfig.headers,
			cors: EndpointConfig.cors
		};

		// Return a promise
		return fetch(url, requestParams);
	};

	// Set favorite
	// Adds an item with the specified ID to the list of favorites
	static AddFavorite(pUserId, pItemId) {
		// Construct a new URL
		let url = new URL(`${EndpointConfig.url}/favorites/add`);

		// Set-up request params
		const requestParams = {
			method: 'POST',
			headers: EndpointConfig.headers,
			cors: EndpointConfig.cors,
			body: JSON.stringify({
				userId: pUserId,
				itemId: pItemId
			})
		};

		// Return a promise
		return fetch(url, requestParams);
	};

	// Remove favorite
	// Removes an item with the specified ID from the list of favorites
	static RemoveFavorite(pUserId, pItemId) {
		// Construct a new URL
		let url = new URL(`${EndpointConfig.url}/favorites/remove`);

		// Set-up request params
		const requestParams = {
			method: 'DELETE',
			headers: EndpointConfig.headers,
			cors: EndpointConfig.cors,
			body: JSON.stringify({
				userId: pUserId,
				itemId: pItemId
			})
		};

		// Return a promise
		return fetch(url, requestParams);
	};
};

export default FavoriteService;
