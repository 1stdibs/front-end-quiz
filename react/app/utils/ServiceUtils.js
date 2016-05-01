function _getServiceUrl(serviceName, params) {
	if (serviceName === 'loadItems') {
		return '/items';
	} else if (serviceName === 'loadItemDetails') {
		return '/item/' + params.id;
	}
}

class ServiceUtils {
	static callService(serviceName, params) {
		return new Promise((resolve, reject) => {
			$.get(_getServiceUrl(serviceName, params), params).then((response) => {
				resolve(response);
			});
		});
	}
}

module.exports = ServiceUtils;