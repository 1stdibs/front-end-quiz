import Dispatcher from '../dispatcher/Dispatcher';
import Actions from '../constants/Actions';

const _actionMap = {
	goBack: Actions.GO_BACK,
	executeRoute: Actions.EXECUTE_ROUTE
}

const RoutingActions = {};

for (let actionName in _actionMap) {
	RoutingActions[actionName] = function(params) {
		Dispatcher.dispatch({
			type: _actionMap[actionName],
			params: params
		});
	}
}

module.exports = RoutingActions;