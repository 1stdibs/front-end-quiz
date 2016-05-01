import Dispatcher from '../dispatcher/Dispatcher';
import Actions from '../constants/Actions';

const _actionMap = {
	toggleFavouriteItem: Actions.TOGGLE_FAVOURITE_ITEM
}

const FavouriteItemActions = {};

for (let actionName in _actionMap) {
	FavouriteItemActions[actionName] = function(params) {
		Dispatcher.dispatch({
			type: _actionMap[actionName],
			params: params
		});
	}
}

module.exports = FavouriteItemActions;