function _getServiceUrl(serviceName) {
	if (serviceName === 'loadItems') {
		return '/items';
	}
}

class ServiceUtils {
	static callService(serviceName, params) {
		return new Promise((resolve, reject) => {
			$.get(_getServiceUrl(serviceName), params).then((response) => {
				resolve(response);
			});
		});
	}
}

module.exports = ServiceUtils;