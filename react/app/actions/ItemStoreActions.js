import Dispatcher from '../dispatcher/Dispatcher';
import Actions from '../constants/Actions';

const _actionMap = {
	loadItems: Actions.LOAD_ITEMS,
	loadItemDetails: Actions.LOAD_ITEM_DETAILS
};

const ItemStoreActions = {};

for (let actionName in _actionMap) {
	if (_actionMap.hasOwnProperty(actionName)) {
		ItemStoreActions[actionName] = function(params) {
			Dispatcher.dispatch({
				type: _actionMap[actionName],
				params: params
			});
		};
	}
}

module.exports = ItemStoreActions;