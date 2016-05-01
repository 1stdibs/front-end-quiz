import Dispatcher from '../dispatcher/Dispatcher';
import Actions from '../constants/Actions';

const _actionMap = {
	loadFavouriteItems: Actions.LOAD_FAVOURITE_ITEMS,
	toggleFavouriteItem: Actions.TOGGLE_FAVOURITE_ITEM
};

const FavouriteItemActions = {};

for (let actionName in _actionMap) {
	if (_actionMap.hasOwnProperty(actionName)) {
		FavouriteItemActions[actionName] = function(params) {
			Dispatcher.dispatch({
				type: _actionMap[actionName],
				params: params
			});
		};
	}
}

module.exports = FavouriteItemActions;