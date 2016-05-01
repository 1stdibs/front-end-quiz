function _getServiceUrl(serviceName, params) {
	switch (serviceName) {
		case 'loadItems':
			return '/items?' + $.param(params || {});
		case 'loadItemDetails':
			return `/item/${params.id}`;
		case 'toggleFavouriteItem':
			return `/item/${params.id}/favourite`;
		case 'loadFavouriteItems':
			return '/items/favourites';
	}
}

class ServiceUtils {
	static callService(serviceName, params) {
		return new Promise((resolve) => {
			$.get(_getServiceUrl(serviceName, params)).then((response) => {
				resolve(response);
			});
		});
	}
}

module.exports = ServiceUtils;