// Imports
import EndpointConfig from './../config/endpointConfig';

// This class provides access to item related web-service calls
class ItemService {
	// Get items
	// Returns a promise for the list of items
	static GetItems(pStartIndex, pAmount) {
		// Construct a new URL
		let url = new URL(`${EndpointConfig.url}/browse`);

		// Add URL params to it
		url.search = new URLSearchParams({
			start: pStartIndex,
			limit: pAmount
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

	// Get item by id
	// Returns a promise for an item with the specified ID
	static GetItemById(pId) {
		// Construct a new URL
		const url = new URL(`${EndpointConfig.url}/item/${pId}`);

		// Set-up request params
		const requestParams = {
			method: 'GET',
			headers: EndpointConfig.headers,
			cors: EndpointConfig.cors
		};

		// Return a promise
		return fetch(url, requestParams);
	};
};

export default ItemService;